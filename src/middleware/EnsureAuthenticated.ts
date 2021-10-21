import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
}

export function EnsureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      errorcode: "token.invalid",
    });
  }
  //na posição 0 ele vai retornar o tipo Bearer do token
  //na posição 1 ele retorna o token
  const [, token] = authToken.split(" ");

  try {
      const { sub } = verify(token, process.env.JWT_SECRET) as IPayload; 
      request.user_id = sub

      return next()
      
  } catch (error) {
      response.status(401).json({errorCode: "Token.expired"})
  }

}
