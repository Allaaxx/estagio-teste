// Função que transforma (parseia) um filme para o formato desejado
export function parseFilme(filme: any) {
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

  let maiorPremiacao = null;
  if (Array.isArray(filme.premios) && filme.premios.length > 0) {
    const premio = filme.premios.reduce(
      (max: any, atual: any) => atual.relevancia > max.relevancia ? atual : max,
      filme.premios[0]
    );
    maiorPremiacao = premio.nome;
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
    notaIMDb,
    lucro: lucro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
    maiorPremiacao,
    sinopse: sinopseEscolhida
  };
}
