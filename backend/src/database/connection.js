const knex = require('knex');
const configuration = require('../../knexfile');/*Importa as configurações 
do bancos de dados disponiveis no knexfile*/

const connection = knex(configuration.development);/*cria a conexão*/

module.exports = connection;
/*exporta a conexão com o banco de dados*/