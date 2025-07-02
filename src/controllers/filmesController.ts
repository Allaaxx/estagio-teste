import { Request, Response } from "express";
const { filmes } = require("../database");

export const getHome = (req: Request, res: Response) => {
  res.json({ message: "Bem vindo a API, por Allan Rodrigues Alves de Oliveira" });
};

export const getFilmes = (req: Request, res: Response) => {
  res.json(filmes);
};

export const postFilme = (req: Request, res: Response) => {
  const novoFilme = req.body;
  filmes.push(novoFilme);
  res.status(201).json(novoFilme);
};
