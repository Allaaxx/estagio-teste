import { Request, Response } from "express";
const { filmes } = require("../database");

export const getFilmes = (req: Request, res: Response) => {
  res.json(filmes);
};
