import { Request, Response } from "express";

/**
 * Controller responsável por exibir a mensagem de boas-vindas na rota raiz da API.
 * Retorna um JSON simples com uma mensagem de apresentação.
 */
export const getHome = (req: Request, res: Response) => {
  res.json({
    message: "Bem vindo à API de Filmes! Por Allan Rodrigues Alves de Oliveira.",
    instrucoes: [
      "GET /            → Mensagem de boas-vindas e instruções da API.",
      "GET /filmes      → Lista todos os filmes cadastrados (dados crus).",
      "POST /filmes     → 'Adiciona' um novo filme (enviar JSON no corpo da requisição).",
      "GET /parsedFilmes→ Lista todos os filmes já parseados/transformados conforme requisitos do teste.",
      "Consulte o README.md para detalhes de uso, exemplos de requisição e explicações técnicas."
    ]
  });
};
