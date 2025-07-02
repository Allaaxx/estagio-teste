# Relatório do Teste Backend Node.js - API de Filmes

## Passos realizados

1. **Configuração do Projeto**
   - Criação do projeto Node.js com TypeScript.
   - Instalação das dependências: express, typescript, ts-node, @types/express, @types/node.
   - Configuração do tsconfig.json para organizar o código.

2. **Estruturação do Código**
   - Separação em camadas: database, controllers, routes e server.
   - Dados dos filmes em `src/database/index.ts`.
   - Lógica de negócio em `src/controllers/filmesController.ts`.
   - Rotas em `src/routes/index.ts`.
   - Inicialização do servidor em `src/server/Server.ts` e `src/index.ts`.

3. **Implementação da API**
   - Rota `/filmes` retorna todos os filmes parseados conforme os requisitos.
   - Função `parseFilme` implementada para:
     - Calcular lucro (bilheteria - orçamento) e formatar como string.
     - Identificar a premiação de maior relevância.
     - Converter duração para segundos.
     - Pegar nota IMDb como string.
     - Selecionar sinopse em pt-br, se não houver, em inglês, se não houver, qualquer uma.
     - Remover propriedades `locacoes`, `poster` e `trailer`.

4. **Testes**
   - Testes realizados via Postman e navegador.
   - Conferência do retorno da rota `/filmes` com o exemplo esperado.

## Exemplo de resposta da API

```json
{
  "titulo": "O Poderoso Chefão",
  "ano": 1972,
  "diretor": "Francis Ford Coppola",
  "genero": ["Crime", "Drama"],
  "duracaoSegundos": 10500,
  "notaIMDb": "9.2",
  "lucro": "R$ 1.994.000.000,00",
  "premiacaoMaior": {
    "nome": "Oscar de Melhor Filme",
    "relevancia": 10
  },
  "sinopse": "Um chefão da máfia tenta transferir o controle de seu império clandestino para seu filho relutante."
}
```

## Observações
- O projeto está pronto para rodar com `npm run dev` ou `npm start` (após build).
- O código está comentado e organizado para fácil manutenção.
- Qualquer dúvida, estou à disposição!
