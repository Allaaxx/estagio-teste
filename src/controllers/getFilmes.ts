import { Request, Response } from "express";
const { filmes } = require("../database");

/**
 * Controller responsável por retornar todos os filmes cadastrados (crus, sem parseamento).
 * Retorna o array completo de filmes conforme está no banco de dados local.
 */
export const getFilmes = (req: Request, res: Response) => {
  // Retorna todos os filmes cadastrados
  res.json(filmes);
};
