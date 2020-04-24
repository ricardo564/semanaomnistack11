const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach( async () => {
        await connection.migrate.rollback();//zero o banco de dados antes de começar o testes
        await connection.migrate.latest();
    });

    afterAll(async () => { // executa algo depois de todos os testes
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAD2",
            email: "contato@teste.com",
            whatsapp: "4700000000",
            city: "Jahu",
            uf: "SP"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});