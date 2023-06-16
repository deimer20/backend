const{Router} = require ('express')

const route = Router()

const {reporteGet,reportePost,reportePut,reporteDelete} = require('../controllers/reporte')

route.get('/', reporteGet )

route.post('/', reportePost )

route.put('/', reportePut )

route.delete('/', reporteDelete )


module.exports = route