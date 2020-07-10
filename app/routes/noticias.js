const dbconnection =  require('../../config/dbConnection');

module.exports =  function(app) {

    const connection = dbconnection();

    app.get('/noticias', function(req, res){
    connection.query('select * from noticias', function(error, result){
        res.render('noticias/noticias', {noticias: result })
    });
   

}); 
}