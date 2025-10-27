import { CredentialsSignin, NextAuthConfig, User } from 'next-auth';
import 'next-auth/jwt';
import Credentials, {
  CredentialsConfig,
} from 'next-auth/providers/credentials';
import { tokenSchema } from '~/auth/token';
import { AuthSchema } from '~/schemas/auth';
import { ProfileSchema } from '~/schemas/profile';
import { getProfile, login, refresh } from '~/services/auth';
import { LoginBodyType, TokenType } from '~/types/core/auth';
import { decodeJWT } from '~/utils/jwt';

declare module 'next-auth' {
  interface Session {
    profile?: Omit<ProfileSchema, 'permissions'> & {
      permissions: string[];
    };
    tokens: TokenType;
    auth?: AuthSchema;
  }

  interface User {
    profile?: Omit<ProfileSchema, 'permissions'> & {
      permissions: string[];
    };
    tokens: TokenType;
    auth?: AuthSchema;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    profile?: Omit<ProfileSchema, 'permissions'> & {
      permissions: string[];
    };
    tokens: TokenType;
    auth?: AuthSchema;
  }
}

class InvalidLoginError extends CredentialsSignin {
  code = 'custom';
  constructor(message: string) {
    super(message);
    this.code = message;
  }
}

export const otpCredentialConfig: Partial<CredentialsConfig> = {
  id: 'otp',
  authorize: async (credentials) => {
    const tokens = tokenSchema.safeParse(credentials);

    if (tokens.error) {
      return null;
    }

    const { accessToken, refreshToken, ...auth } = tokens.data;

    const result: User = {
      tokens: { accessToken, refreshToken },
      auth,
    };

    if (!!accessToken) {
      const profile = await getProfile(accessToken);

      result.profile = {
        ...profile.data,
        permissions: profile.data.permissions.map(
          (permission) => permission.name,
        ),
      };
      // get business id
      const decoded = decodeJWT(accessToken);
      const businessId = decoded.businessId;
      if (businessId) {
        result.profile.businessId = businessId;
      }
    }

    return result;
  },
};

export const loginCredentialConfig: Partial<CredentialsConfig> = {
  id: 'user-login',
  authorize: async (credentials) => {
    const { username, password } = credentials as LoginBodyType;

    if (!username || !password) {
      return null;
    }

    try {
      const response = await login({ username, password });
      const { accessToken, refreshToken, ...auth } = response.data;

      const result: User = {
        tokens: { accessToken, refreshToken },
        auth,
      };

      if (!!accessToken) {
        const profile = await getProfile(accessToken);
        result.profile = {
          ...profile.data,
          permissions: profile.data.permissions.map(
            (permission) => permission.name,
          ),
        };

        // get business id
        const decoded = decodeJWT(accessToken);
        const businessId = decoded.businessId;
        if (businessId) {
          result.profile.businessId = businessId;
        }
      }

      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new InvalidLoginError(error.message);
      }

      return null;
    }
  },
};

export const authConfig = {
  providers: [
    Credentials(otpCredentialConfig),
    Credentials(loginCredentialConfig),
  ],

  callbacks: {
    jwt: async ({ token, user, trigger, session }) => {
      if (trigger === 'update' && session) {
        // const profile = session;

        token = {
          ...token,
          profile: {
            ...token.profile,
            ...session.profile,
          },
        };
      }

      if (user) {
        const { auth, profile, tokens } = user;

        token = {
          ...token,
          auth,
          profile,
          tokens,
        };
      }

      if (token.tokens.accessToken !== '' && token.tokens.refreshToken !== '') {
        const decoded = decodeJWT(token.tokens.accessToken);
        const issuedAt = decoded.iat;
        const expiresIn = decoded.exp;

        if (issuedAt && expiresIn) {
          const now = Math.floor(Date.now() / 1000);
          const tokenLifetime = expiresIn - issuedAt; // Total token lifetime in seconds

          // Calculate refresh threshold: refresh when 20% of token lifetime remains
          // But ensure minimum 30 seconds and maximum 5 minutes before expiration
          const refreshThreshold = Math.min(
            Math.max(tokenLifetime * 0.2, 20), // At least 30 seconds remaining
            300, // At most 5 minutes before expiration
          );
          if (now >= expiresIn - refreshThreshold) {
            try {
              const results = await refresh({
                refreshToken: token.tokens.refreshToken,
                sessionId: token.auth?.sessionId ?? '',
              });

              token = {
                ...token,
                tokens: {
                  accessToken: results?.data?.accessToken,
                  refreshToken: results?.data?.refreshToken,
                },
              };
            } catch (error) {
              console.error('[auth] failed refreshing token, cause:', error);
              return null;
            }

            return token;
          }
        }
      }

      return token;
    },

    session: async ({ session, token }) => {
      if (token) {
        const { auth, profile, tokens } = token;

        session = {
          ...session,
          auth,
          profile,
          tokens,
        };
      }

      return session;
    },
  },

  pages: {
    signIn: '/auth/login',
  },

  cookies: {
    sessionToken: {
      name: 'saas-management.auth-session',
    },
  },
} satisfies NextAuthConfig;
