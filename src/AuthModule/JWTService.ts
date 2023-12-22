import jwt from 'jsonwebtoken';

export default class JWTService {
  public static generateToken(payload: any) {
    return jwt.sign(payload, 'secret123', {expiresIn: '1000h'});
  }

  public static verifyToken(token: string) {
    return jwt.verify(token, 'secret123');
  }

  public static decodeToken(token: string) {
    return jwt.decode(token);
  }
}