# API de Filmes – Teste Backend Node.js

## Visão Geral

API desenvolvida em Node.js com TypeScript, seguindo boas práticas de arquitetura, tipagem e organização para o processo seletivo. O projeto consome dados de filmes de uma API externa, faz o parse conforme requisitos do teste e expõe uma única rota principal.

## Configuração do Projeto

- Projeto Node.js com TypeScript, organizado em camadas: `controllers`, `services`, `routes` e `server`.
- Dependências principais: express, typescript, ts-node, node-fetch, @types/express, @types/node.
- Configuração do `tsconfig.json` para garantir tipagem estrita e organização.

## Arquitetura e Organização

- **Service**: `services/filmesService.ts` faz o fetch dos dados da API externa (AWS Lambda).
- **Controller**: `controllers/getFilmes.ts` orquestra a busca e o parse dos filmes.
- **Parse**: `controllers/parseFilme.ts` isola a lógica de transformação dos dados, com tipagem forte.
- **Rota**: Apenas `/filmes` está exposta em `routes/index.ts`, retornando os dados já transformados.
- **Server**: Inicialização em `src/server/Server.ts` e `src/index.ts`.

## Regras de Negócio e Transformação

- Lucro calculado (bilheteria - orçamento) e formatado como string.
- Premiação de maior relevância identificada.
- Duração convertida para segundos.
- Nota IMDb retornada como string.
- Sinopse prioriza pt-br, depois inglês, depois qualquer idioma.
- Propriedades desnecessárias removidas: `locacoes`, `poster`, `trailer`.

## Fluxo da API

1. **Requisição para `/filmes`**
2. Controller aciona o service para buscar os filmes na API externa (AWS Lambda).
3. Cada filme é transformado pela função `parseFilme` para atender aos requisitos de negócio.
4. Resposta retorna apenas os filmes já parseados.

## Exemplo de Resposta

```json
{
	"titulo": "O Poderoso Chefão",
	"ano": 1972,
	"diretor": "Francis Ford Coppola",
	"genero": [
		"Crime",
		"Drama"
	],
	"duracaoSegundos": 10500,
	"notaIMDb": 9.2,
	"lucro": "$239 milhões",
	"maiorPremiacao": "Oscar de Melhor Filme",
	"sinopse": "Um chefão da máfia tenta transferir o controle de seu império clandestino para seu filho relutante."
}
```

## Como rodar

- Instale as dependências: `npm install`
- Para desenvolvimento: `npm run dev`
- Para produção: `npm run build` e depois `npm start`

## Observações

- O projeto está pronto para rodar com `npm run dev` (desenvolvimento) ou `npm start` (após build).
- Código limpo, sem logs ou comentários excessivos, seguindo boas práticas de arquitetura e tipagem.
- README atualizado conforme a arquitetura final.
- Qualquer dúvida, estou à disposição!
