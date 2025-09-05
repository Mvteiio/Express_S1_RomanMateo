/* Importación de express */
const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json())

const port = process.env.PORT;

app.get('/', (req,res)=>{
    res.send('Holis\n')
});

app.get('/endpoint', (req,res)=>{
    res.send('Prueba\n')
});

app.listen(port, ()=>{
    console.log("Servidor Iniciado")
})

