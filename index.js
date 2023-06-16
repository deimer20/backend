require('dotenv').config() //Importacion del paquete
const Server = require('./models/server')

const server =new Server() //Instanciar el objeto

server.listen()

