// Função que transforma (parseia) um filme para o formato desejado
export function parseFilme(filme: any) {
  // Função auxiliar para extrair valor numérico e unidade (milhões/bilhões)
  function extraiValorEUnidade(valor: string) {
    if (!valor) return { numero: 0, unidade: "" };
    let unidade = "";
    let valorLimpo = valor.toLowerCase();
    if (valorLimpo.includes('bilh')) {
      unidade = 'bilhões';
    } else if (valorLimpo.includes('milh')) {
      unidade = 'milhões';
    }
    valorLimpo = valorLimpo.replace(/[^\d,.]/g, '').replace(',', '.');
    return { numero: parseFloat(valorLimpo), unidade };
  }

  const { numero: orcamentoNum, unidade: unidadeOrc } = extraiValorEUnidade(filme.orcamento || '0');
  const { numero: bilheteriaNum, unidade: unidadeBil } = extraiValorEUnidade(filme.bilheteria || '0');
  // Se as unidades forem diferentes, prioriza a unidade da bilheteria
  let lucroNum = bilheteriaNum - orcamentoNum;
  let lucroStr = '';
  if (unidadeBil) {
    // Exemplo: $1.4 bilhões
    lucroStr = `$${lucroNum.toLocaleString('en-US', { maximumFractionDigits: 1 })} ${unidadeBil}`;
  } else {
    // Caso não tenha unidade, mostra só o valor
    lucroStr = `$${lucroNum}`;
  }

  let maiorPremiacao = null;
  if (Array.isArray(filme.premios) && filme.premios.length > 0) {
    maiorPremiacao = filme.premios.reduce(
      (max: any, atual: any) => atual.relevancia > max.relevancia ? atual : max,
      filme.premios[0]
    ).nome;
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
  } else if (typeof filme.sinopse === 'string') {
    sinopseEscolhida = filme.sinopse;
  }

  return {
    titulo: filme.titulo,
    ano: filme.ano,
    diretor: filme.diretor,
    genero: filme.genero,
    duracaoSegundos,
    notaIMDb: notaIMDb ? Number(notaIMDb) : null,
    lucro: lucroStr,
    maiorPremiacao,
    sinopse: sinopseEscolhida
  };
}
