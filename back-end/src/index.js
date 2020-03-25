const express = require("express");

const cors = require("cors");

const routes = require('./routes')

const app = express();

app.use(cors());

/**
 * se colocarmos o app em produção colocaremos dentro do cors o seguinte codigo: "origin: 'http://meuapp.com'(se o nosso front-end estiver ospedado em meuapp.com)sem isso todas as aplicações front-end podem acessar o nosso back-end(como esta definido agora)
 */

app.use(express.json())
app.use(routes);

/***
 * METODOS HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma infotmação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parametros nomeador/enviados na rota após "?" (Filtros, paginação)
 * Rout Params: Parametros utilizados para identificar recursos (tipo um id num banco de dados)
 * Request Body: Corpo da requisição, utilizando para criar ou alterar recursos
 */

app.listen(3333);