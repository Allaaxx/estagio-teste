
export interface Filme {
  titulo: string;
  diretor: string;
  ano: number;
  genero: string[];
  duracao: number;
  ratings: { valor: number; fonte: string }[];
  elenco: string[];
  sinopse: { texto: string; idioma: string }[] | string;
  orcamento: string;
  bilheteria: string;
  premios: { nome: string; relevancia: number }[];
}

export interface FilmeParseado {
  titulo: string;
  ano: number;
  diretor: string;
  genero: string[];
  duracaoSegundos: number;
  notaIMDb: number | null;
  lucro: string;
  maiorPremiacao: string | null;
  sinopse: string;
}

export function parseFilme(filme: Filme): FilmeParseado {
  const extraiValorEUnidade = (valor: string) => {
    if (!valor) return { numero: 0, unidade: "" };
    const valorLimpo = valor.toLowerCase();
    if (!valorLimpo.includes('bilh') && !valorLimpo.includes('milh')) {
      return { numero: parseFloat(valorLimpo.replace(/[^\d,.]/g, '').replace(',', '.')), unidade: "" };
    }
    const unidade = valorLimpo.includes('bilh') ? 'bilhões' : 'milhões';
    return {
      numero: parseFloat(valorLimpo.replace(/[^\d,.]/g, '').replace(',', '.')),
      unidade
    };
  };

  const { numero: orcamentoNum } = extraiValorEUnidade(filme.orcamento || '0');
  const { numero: bilheteriaNum, unidade: unidadeBil } = extraiValorEUnidade(filme.bilheteria || '0');
  const lucroNum = bilheteriaNum - orcamentoNum;
  const lucroStr = unidadeBil
    ? `$${lucroNum.toLocaleString('en-US', { maximumFractionDigits: 1 })} ${unidadeBil}`
    : `$${lucroNum}`;

  const maiorPremiacao = Array.isArray(filme.premios) && filme.premios.length > 0
    ? filme.premios.reduce((max, atual) => atual.relevancia > max.relevancia ? atual : max, filme.premios[0]).nome
    : null;

  const duracaoSegundos = (filme.duracao || 0) * 60;

  let notaIMDb: number | null = null;
  if (Array.isArray(filme.ratings)) {
    const imdb = filme.ratings.find(r => r.fonte === 'IMDb');
    if (imdb) notaIMDb = imdb.valor;
  }

  let sinopseEscolhida = '';
  if (Array.isArray(filme.sinopse)) {
    const pt = filme.sinopse.find(s => s.idioma === 'pt-br');
    const en = filme.sinopse.find(s => s.idioma === 'en');
    sinopseEscolhida = pt?.texto || en?.texto || filme.sinopse[0]?.texto || '';
  } else if (typeof filme.sinopse === 'string') {
    sinopseEscolhida = filme.sinopse;
  }

  return {
    titulo: filme.titulo,
    ano: filme.ano,
    diretor: filme.diretor,
    genero: filme.genero,
    duracaoSegundos,
    notaIMDb,
    lucro: lucroStr,
    maiorPremiacao,
    sinopse: sinopseEscolhida
  };
}
