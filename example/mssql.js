
require('dotenv').config();
const mssql = require('mssql');

module.exports = function (callback) {
    mssql.connect(connectionString())
        .then(client => callback(null, client))
        .catch(error => callback(error, null));
}

function connectionString() {
    const { SYS, PASS, HOST, PORT, DB } = process.env;

    if (DB) {
        return `mssql://${SYS}:${PASS}@${HOST}:${PORT}/${DB}`
    } else {
        return `mssql://${SYS}:${PASS}@${HOST}:${PORT}`
    }
}
