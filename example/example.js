/**
 * MSSQL Example API implementation 
 * - Imports a promise which is the result of a db connection in the conf file.
 * This promise when resolved returns a db client that can be used to run server-side queries.
 */

const
    sql = require('./mssql'),
    query = 'select CURRENT_TIMESTAMP';

sql(function (error, client) {
    if (error) { throw new Error('Connection did not succeed'); }

    const queryPromise = client.query(query);

    queryPromise
        .then(queryResult => {
            console.log(queryResult);
            // ... do something with result

            /* Expected result in the console
                recordsets: [ [ [Object] ] ],
                recordset: [ { '': 2020-04-07T22:04:24.990Z } ],
                output: {},
                rowsAffected: [ 1 ]
             */

            client.close() // always close the client
        });

    queryPromise
        .catch(queryError => {
            console.log('queryError: ', queryError);
            // ... handle the error

            client.close() // always close the client
        })
})