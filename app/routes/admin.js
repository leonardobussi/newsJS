module.exports = function(application) {

application.get('/formulario_inclusao_noticia', function(req, res){
    res.render('admin/form_add_noticia')
});

application.post('/noticias/salvar', function(req, res){
    const noticia = req.body;
    
    req.assert('titulo','o titulo é obrigatorio').notEmpty();
    req.assert('resumo','o resumo é obrigatorio').notEmpty();
    req.assert('resumo','o resumo tem que ter entre 10 a 100 caracteres').len(10, 100);
    req.assert('autor','o autor é obrigatorio').notEmpty();
    req.assert('data_noticia','o data é obrigatorio').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('noticia','o campo de noticia é obrigatorio').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('admin/form_add_noticia', {validacao: erros});
        return ;

    }

    const connection = application.config.dbConnection();
    const noticiasModel = new application.app.models.NoticiasDAO(connection);

   noticiasModel.salvarNoticia(noticia, function(error, result){
    res.redirect('/noticias')
    });
});
}