const sql = require('mssql');

module.exports = {
    save: async (cliente) => {
        try {
            const query = `INSERT INTO DBO.CLIENTES (NAME, CPF, PHONE, EMAIL) VALUES ('${cliente.name}', '${cliente.cpf}', '${cliente.phone}', '${cliente.email}');`
            console.log(query)
            const request = new sql.Request();
            await request.query(query, (err, result) => {
                console.log(err)
                console.log(result)
            })
        } catch (err) {
            console.log(`[ERROR] ${err.message}`)
            throw err;
        }
    },

    get: async (cpf, res) => {

        const query = `SELECT * FROM dbo.CLIENTES WHERE CPF = '${cpf}';`
        const request = new sql.Request();
        request.query(query).then(result => res.status(200).send(result.recordset)).catch(err => res.json({ message: err.message }));
    },


}