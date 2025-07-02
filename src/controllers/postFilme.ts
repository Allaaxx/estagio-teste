import { Request, Response } from "express";
const { filmes } = require("../database");

export const postFilme = (req: Request, res: Response) => {
  const novoFilme = req.body;
  filmes.push(novoFilme);
  res.status(201).json(novoFilme);
};
