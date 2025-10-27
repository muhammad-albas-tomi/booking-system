import { decode } from 'jsonwebtoken';
import { JwtPayload } from '~/types/jwt';

export function decodeJWT(token: string) {
  return decode(token) as JwtPayload;
}
