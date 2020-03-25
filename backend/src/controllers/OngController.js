const crypt = require('crypto');
const connection = require('../database/connection');
/*importa a conexão com o banco de dados*/

module.exports = {

    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, responde){
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypt.randomBytes(4).toString('HEX');
        /*gera 4 bity de caracteres aleatorios e converte pra um string do tipo hexadecimal*/
    
        await connection('ongs').insert({
            id,
            name,email,
            whatsapp,
            city,
            uf,
        })

        return Response.json({ id });

    }
};
