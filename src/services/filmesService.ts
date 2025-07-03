import fetch from "node-fetch";
import { Filme } from "../controllers/parseFilme";

export const getFilmesExternos = async (): Promise<{ filmes: Filme[] }> => {
  const response = await fetch("https://tv5hn2gvyijpl76yxlmsy66jwa0nlmxn.lambda-url.us-east-1.on.aws/");
  if (!response.ok) throw new Error("Erro ao buscar filmes da API externa.");
  return response.json();
};
