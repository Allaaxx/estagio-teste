import { Request, Response } from "express";
import { getFilmesExternos } from "../services/filmesService";
import { parseFilme } from "./parseFilme";

export const getFilmes = async (req: Request, res: Response) => {
  try {
    const resposta = await getFilmesExternos();
    const filmes = resposta.filmes;
    const filmesParseados = filmes.map(parseFilme);
    res.json(filmesParseados);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar ou processar filmes." });
  }
};
