import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { JwtService } from './jwt.service';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    if ('x-jwt' in req.headers) {
      const token = req.headers['x-jwt'];
      console.log('token', token);

      const decoded = this.jwtService.verify(token.toString());

      console.log(decoded);
      if (typeof decoded === 'object' && decoded.hasOwnProperty('id')) {
        console.log('User id: ', decoded['id']);
      }
    }
    next();
  }
}
