const express = require ('express')
const {dbConnection} = require ('../database/config')
const cors = require('cors'); // para implementar seguridad
const bodyParser = require('body-parser')

class Server{

    constructor(){
        this.app = express()
        this.port = process.env.PORT //capturando variable puerto
        this.reportePath = '/api/reporte' // ruta publica
        this.middlewares()//para los puentes, ayudas extras o enlaces
        this.routes() // Para las rutas
        this.conectarDB()//para conectar a la base de datos
    }
    listen(){
        this.app.listen(this.port,() => {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }

    middlewares(){
        this.app.use(express.static(__dirname + "/public"));

        this.app.use(cors () );

        this.app.use(bodyParser.json());

    }

    routes() {
        this.app.use(this.reportePath, require('../routes/reportes'))
        
    }
    async conectarDB(){
        await dbConnection() //esperar la coneccion o la respuesta de servidor 
    }
}

module.exports = Server