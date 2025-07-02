// Função que transforma (parseia) um filme para o formato desejado, conforme requisitos do teste.
export function parseFilme(filme: any) {
  // Função auxiliar para extrair valor numérico e unidade (milhões/bilhões) de uma string monetária
  function extraiValorEUnidade(valor: string) {
    if (!valor) return { numero: 0, unidade: "" };
    let unidade = "";
    let valorLimpo = valor.toLowerCase();
    // Detecta se o valor está em bilhões ou milhões
    if (valorLimpo.includes('bilh')) {
      unidade = 'bilhões';
    } else if (valorLimpo.includes('milh')) {
      unidade = 'milhões';
    }
    // Remove caracteres não numéricos, exceto vírgula e ponto
    valorLimpo = valorLimpo.replace(/[^\d,.]/g, '').replace(',', '.');
    return { numero: parseFloat(valorLimpo), unidade };
  }

  // Extrai valores numéricos e unidades de orçamento e bilheteria
  const { numero: orcamentoNum, unidade: unidadeOrc } = extraiValorEUnidade(filme.orcamento || '0');
  const { numero: bilheteriaNum, unidade: unidadeBil } = extraiValorEUnidade(filme.bilheteria || '0');

  // Calcula o lucro (bilheteria - orçamento) e monta a string no formato esperado
  let lucroNum = bilheteriaNum - orcamentoNum;
  let lucroStr = '';
  if (unidadeBil) {
    // Exemplo: $1.4 bilhões
    lucroStr = `$${lucroNum.toLocaleString('en-US', { maximumFractionDigits: 1 })} ${unidadeBil}`;
  } else {
    // Caso não tenha unidade, mostra só o valor
    lucroStr = `$${lucroNum}`;
  }

  // Seleciona a premiação de maior relevância (maior valor de relevancia)
  let maiorPremiacao = null;
  if (Array.isArray(filme.premios) && filme.premios.length > 0) {
    maiorPremiacao = filme.premios.reduce(
      (max: any, atual: any) => atual.relevancia > max.relevancia ? atual : max,
      filme.premios[0]
    ).nome;
  }

  // Converte duração de minutos para segundos
  const duracaoSegundos = (filme.duracao || 0) * 60;

  // Busca a nota do IMDb, se existir
  let notaIMDb = null;
  if (Array.isArray(filme.ratings)) {
    const imdb = filme.ratings.find((r: any) => r.fonte === 'IMDb');
    if (imdb) notaIMDb = imdb.valor.toString();
  }

  // Seleciona a sinopse priorizando pt-br, depois en, depois qualquer
  let sinopseEscolhida = '';
  if (Array.isArray(filme.sinopse)) {
    const pt = filme.sinopse.find((s: any) => s.idioma === 'pt-br');
    const en = filme.sinopse.find((s: any) => s.idioma === 'en');
    sinopseEscolhida = pt?.texto || en?.texto || filme.sinopse[0]?.texto || '';
  } else if (typeof filme.sinopse === 'string') {
    sinopseEscolhida = filme.sinopse;
  }

  // Retorna o novo objeto já transformado, apenas com os campos desejados
  return {
    // Título do filme
    titulo: filme.titulo,
    // Ano de lançamento
    ano: filme.ano,
    // Diretor
    diretor: filme.diretor,
    // Gêneros
    genero: filme.genero,
    // Duração em segundos
    duracaoSegundos,
    // Nota do IMDb (número ou null)
    notaIMDb: notaIMDb ? Number(notaIMDb) : null,
    // Lucro formatado
    lucro: lucroStr,
    // Nome da maior premiação
    maiorPremiacao,
    // Sinopse priorizando pt-br
    sinopse: sinopseEscolhida
  };
}
