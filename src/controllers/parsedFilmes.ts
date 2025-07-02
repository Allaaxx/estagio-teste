import { Request, Response } from "express";
const { filmes } = require("../database");
import { parseFilme } from "./parseFilme";

/**
 * Controller responsável por retornar todos os filmes já parseados/transformados.
 * Utiliza a função parseFilme para transformar cada filme do array.
 * Retorna um array de filmes no formato esperado pelo teste.
 */
export const parsedFilmes = (req: Request, res: Response) => {
  // Aplica o parse em todos os filmes do array
  const filmesParseados = filmes.map(parseFilme);
  // Retorna o array de filmes parseados
  res.json(filmesParseados);
};
