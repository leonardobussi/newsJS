const mysql = require('mysql');


const connMySQL = function () {
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '0000',
        database: 'portal_noticias'
    });
}

module.exports =  function() {
    console.log('----------------------------')
    console.log('db funcionando')
    return connMySQL;
}