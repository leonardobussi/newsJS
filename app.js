const app = require('./config/server');

const rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);

const rotaHome = require('./app/routes/home');
rotaHome(app);

const rotaFormulario = require('./app/routes/formulario_inclisao_noticia');
rotaFormulario(app);

app.listen(3000, function(){
    console.log("servidor rodando com express")
});