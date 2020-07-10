const app = require('./config/server');

// const rotaNoticias = require('./app/routes/noticias')(app);

// const rotaHome = require('./app/routes/home')(app);

// const rotaFormulario = require('./app/routes/formulario_inclisao_noticia')(app);


app.listen(3000, function(){
    console.log("service reaload with express")
});