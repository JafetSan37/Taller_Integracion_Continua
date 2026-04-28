const express = require ('express');
const app = express();

app.get('/', (req,res) =>{ //req es la petición, y res la respuesta de la API
    res.send('Esta es una respuesta sencilla')
})

module.exports = app;