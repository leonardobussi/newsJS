const mysql = require('mysql');


const connMySQL = function () {
    console.log('success in connect with DB')

    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '0000',
        database: 'portal_noticias'
    });
}

module.exports =  function() {
    console.log('module of connect, OK')
    return connMySQL;
}