import { Request, Response } from "express";
const { filmes } = require("../database");

/**
 * Controller responsável por adicionar um novo filme ao array de filmes.
 * Espera receber um objeto filme válido no corpo da requisição (JSON).
 * Retorna o filme criado com status 201.
 */
export const postFilme = (req: Request, res: Response) => {
  // Extrai o novo filme do corpo da requisição
  const novoFilme = req.body;
  // Adiciona o novo filme ao array de filmes
  filmes.push(novoFilme);
  // Retorna o filme criado com status 201 (Created)
  res.status(201).json(novoFilme);
};
