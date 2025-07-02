import { dir } from "console";
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

function parseFilme(filme: any) {
  function parseValor(valor: string): number {
    valor = valor.replace(/[^\d,.]/g, '').replace(',', '.');
    if (valor.includes('bilh')) {
      return parseFloat(valor) * 1_000_000_000;
    }
    if (valor.includes('milh')) {
      return parseFloat(valor) * 1_000_000;
    }
    return parseFloat(valor);
  }

  const orcamentoNum = parseValor(filme.orcamento || '0');
  const bilheteriaNum = parseValor(filme.bilheteria || '0');
  const lucro = bilheteriaNum - orcamentoNum;

  let premiacaoMaior = null;
  if (Array.isArray(filme.premios) && filme.premios.length > 0) {
    premiacaoMaior = filme.premios.reduce((max: any, atual: any) => atual.relevancia > max.relevancia ? atual : max, filme.premios[0]);
  }

  const duracaoSegundos = (filme.duracao || 0) * 60;

  let notaIMDb = null;
  if (Array.isArray(filme.ratings)) {
    const imdb = filme.ratings.find((r: any) => r.fonte === 'IMDb');
    if (imdb) notaIMDb = imdb.valor.toString();
  }

  let sinopseEscolhida = '';
  if (Array.isArray(filme.sinopse)) {
    const pt = filme.sinopse.find((s: any) => s.idioma === 'pt-br');
    const en = filme.sinopse.find((s: any) => s.idioma === 'en');
    sinopseEscolhida = pt?.texto || en?.texto || filme.sinopse[0]?.texto || '';
  }

  const { locacoes, poster, trailer, ...rest } = filme;

  return {
    ...rest,
    lucro: lucro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
    premiacaoMaior,
    duracaoSegundos,
    notaIMDb,
    sinopse: sinopseEscolhida
  };
}

export const parsedFilmes = (req: Request, res: Response) => {
  const filmesParseados = filmes.map(parseFilme);
  res.json(filmesParseados);
};

