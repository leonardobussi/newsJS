const mysql = require('mysql');

module.exports =  function() {


    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '0000',
        database: 'portal_noticias'
    });
}