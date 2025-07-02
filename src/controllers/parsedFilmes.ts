import { Request, Response } from "express";
const { filmes } = require("../database");
import { parseFilme } from "./parseFilme";

export const parsedFilmes = (req: Request, res: Response) => {
  const filmesParseados = filmes.map(parseFilme);
  res.json(filmesParseados);
};
