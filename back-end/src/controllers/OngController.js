const crypto = require('crypto');
const connection = require('../database/connection')

module.exports = {
    async index(request, Response) {
        const ongs = await connection('ongs').select("*");
     
         return Response.json(ongs)
     },

    async create(request, Response) {
    /**
     * request guarda todos os dados da nossa requisição
     * response retorna uma resposta pro usuário
     */

        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return Response.json({ id })
        }
};