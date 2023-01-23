const express = require('express')
const { get } = require('http')
const app = express()

// Importar conexion MongoDB
const archivoDB = require('./conexion')

//Configurar server basico
app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend Node.JS. Corriendo...')
})

app.listen(5000, function(){
    console.log('El server esta corriendo correctamente')
})