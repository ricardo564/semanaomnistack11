const knex = require('knex');
const configuration = require('../../knexfile');/*Importa as configurações 
do bancos de dados disponiveis no knexfile*/

const config  = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development; /*cria a conexão, variavel ambiente https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/*/

const connection = knex(config);
module.exports = connection;
/*exporta a conexão com o banco de dados*/