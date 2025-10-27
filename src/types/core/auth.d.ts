export type TokenType = {
  accessToken: string;
  refreshToken: string;
};

export type UserType = {
  id: number;
  role?: string;
  fullname: string;
  isActive: boolean;
  tfaRequired: boolean;
  email: string;
  sessionId: string;
};

export type LoginBodyType = {
  username: string;
  password: string;
};

export type LoginResponseType = TokenType & UserType;
