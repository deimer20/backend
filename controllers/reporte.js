//importar paquetes requeridos de Node
const {response} = require ('express')

//importación de los modelos
const Reporte = require('../models/reporte')
const reporte = require('../models/reporte')

//metodos asincronicos async(req, res)
const reporteGet= async(req, res = response) =>{
    const{direccion} = req.query //Desestructuracion

    const reportes = await Reporte.find()

    res.json({
        reportes
    })
  
}
const reportePost = async (req, res = response) => {
        const body = req.body;
        let mensaje = '';
      
        try {
          const reporte = new Reporte(body);
          await reporte.save();
          mensaje = 'La inserción se efectuó exitosamente';
        } catch (error) {
          if (error.name === 'ValidationError') {
            console.error(Object.values(error.errors).map((val) => val.message));
            mensaje = Object.values(error.errors).map((val) => val.message);
          } else {
            console.error(error);
            mensaje = 'Ocurrió un error al guardar el reporte';
          }
        }
      
        res.json({
          msg: mensaje,
        });
      };
      
//Modificar
const reportePut = async (req, res = response) => {
    const { direccion, latitud, longitud, descripcion, FechaReporte } = req.body;
    let mensaje = '';
  
    try {
      const reporte = await Reporte.findOneAndUpdate(
        { direccion: direccion },
        { latitud, longitud, descripcion, FechaReporte },
        { new: true }
      );
  
      if (reporte) {
        mensaje = 'La modificación se efectuó exitosamente';
      } else {
        mensaje = 'No se encontró el reporte especificado para modificar';
      }
    } catch (error) {
      console.error(error);
      mensaje = 'Se presentaron problemas en la modificación';
    }
  
    res.json({
      msg: mensaje,
    });
  };
  
  const reporteDelete = async (req, res = response) => {
    const { id } = req.body;
    let mensaje = '';
  
    try {
      const reporte = await Reporte.deleteOne({ id: id });
  
      if (reporte.deletedCount > 0) {
        mensaje = 'La eliminación se efectuó exitosamente';
      } else {
        mensaje = 'No se encontró el reporte especificado para eliminar';
      }
    } catch (error) {
      console.error(error);
      mensaje = 'Se presentaron problemas en la eliminación';
    }
  
    res.json({
      msg: mensaje,
    });
  };
  
module.exports = {
    reporteGet,
    reportePost,
    reportePut,
    reporteDelete
}