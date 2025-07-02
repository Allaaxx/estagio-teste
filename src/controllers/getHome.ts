import { Request, Response } from "express";

export const getHome = (req: Request, res: Response) => {
  res.json({
    message: "Bem vindo a API, por Allan Rodrigues Alves de Oliveira",
  });
};
