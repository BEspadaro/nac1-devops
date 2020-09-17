const sql = require("mssql");
const connString = "Server=nac-1-server.database.windows.net;Database=NAC-1-DB;User Id=nac;Password=c-QEXM9xh5>CQ+(w;'";
const pool = new sql.ConnectionPool({
    user: 'nac',
    password: 'c-QEXM9xh5>CQ+(w',
    server: 'nac-1-server.database.windows.net',
    database: 'NAC-1-DB'
})

module.exports = {
    connect: async () => {
        return await sql.connect({
            user: 'nac',
            password: 'c-QEXM9xh5>CQ+(w',
            server: 'nac-1-server.database.windows.net',
            database: 'NAC-1-DB'
        })
    }
}