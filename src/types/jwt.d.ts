import { JwtPayload as DefaultJwtPayload } from 'jsonwebtoken';

export type JwtPayload = DefaultJwtPayload & {
  username: string;
  fullName: string;
  role: string;
};
