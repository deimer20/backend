const mongoose = require ('mongoose')

const dbConnection = () => {
    try{
        mongoose.connect(process.env.MONGO_CNN)
        console.log('Conexión exitisa a la base de datos')

    }
    catch(error){
        console.log('Error en BD')
        throw new error('Error conectando a la base de datos')
    }
}

//exportar la cadena de conexion
module.exports = { dbConnection }