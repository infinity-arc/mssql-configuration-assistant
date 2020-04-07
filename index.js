
require('dotenv').config();
const mssql = require('mssql');

mssql.connect(connectionString()).then(connection).catch(connectionError);

console.log('connectionString(): ', connectionString());

function runQuery(client, callback) {
    const
        qry = require('fs').readFileSync('./script.sql', 'utf8'),
        qProm = client.query(qry);

    return qProm
        .then(qRes => callback(qRes))
        .catch(qErr => callback(qErr));
}

function connectionString() {
    const { SYS, PASS, HOST, PORT, DB } = process.env;

    if (DB) {
        return `mssql://${SYS}:${PASS}@${HOST}:${PORT}/${DB}`
    } else {
        return `mssql://${SYS}:${PASS}@${HOST}:${PORT}`
    }
}

function connectionError(connectionErr) {
    process.argv[2] === '--action=test-connection' 
        ?  (()=>{
            console.log('----------------------------------------------');
            console.error('RESULT: ', connectionErr.message)
            console.log('----------------------------------------------');
        })()
        : console.error('RESULT: ', connectionErr.message)
};

function connection(client) {
    runQuery(client, function (qResult) {
        process.argv[2] === '--action=test-connection' 
            ? (()=>{
                console.log('----------------------------------------------');
                console.error('RESULT: CONFIG SUCCEEDED');
                console.log('----------------------------------------------');
            })()
            : console.log('qResult: ', qResult);
        client.close();
    })
}

