const { Schema, model} = require ('mongoose')

const ReporteSchema = Schema({
    direccion: {
        type: String,
        required: [true, 'El campo dirección es obligatorio'],
      },
      latitud: {
        type: Number,
        required: [true, 'El campo latitud es obligatorio'],
        min: [6.14, 'La latitud mínima permitida es 6.14'],
        max: [6.200, 'La latitud máxima permitida es 6.200'],
      },
      longitud: {
        type: Number,
        required: [true, 'El campo longitud es obligatorio'],
        min: [-75.50, 'La longitud mínima permitida es -75.50'],
        max: [-75.43, 'La longitud máxima permitida es -75.43'],
      },
      descripcion: {
        type: String,
        required: [true, 'El campo descripción es obligatorio'],
      },
      FechaReporte: {
        type: Date,
        default: Date.now,
        required: true,
      },
    });

module.exports = model('Reporte', ReporteSchema); //Exportar el modelo

