const express = require('express');
const cors = require('cors');

const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/*
 * Rota / Recurso
 */

/**
 * 
 * Métodos HTTP: 
 * 
 * GET: Buscar/ ou listar uma informação do Back-end
 * POST: Criar uma informação no Back-end
 * PUT: Alterar uma informação no Back-end
 * DELETE: Deletar uma informação no Back-end
 * 
 */


 /**
  *  Tipos de parâmetros:
  * 
  * Query params: parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Parms: parâmetros ultilizados para identificar recursos
  * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
  * 
  */
/**
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Micrisoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 */

 /**
  * DRIVE: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  * 
  */



