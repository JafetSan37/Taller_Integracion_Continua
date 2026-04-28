const express = require ('express');
const app = express();

app.get('/', (req,res) =>{ //req es la petición, y res la respuesta de la API
    res.send('Esta es una respuesta sencilla')
});

//Función que recibe 2 números y los suma
app.get('/suma',(req,res) =>{
    const { a,b } = req.query;
    const resultado = Number(a) + Number(b);
    res.json({resultado});
});

module.exports = app;