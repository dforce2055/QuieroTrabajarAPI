var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var empleoSchema = new Schema({
    titulo: String,
    descripcion: String,
    fecha_pub: Date,
    empresa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empresas'  
    },
    ubicacion: String,//Google Maps
    localidad: String,
    provincia: String,
    cp: String,//código postal
    tipo_empleo: String,//Full time, Part time, Freelance
    categoria: String,//una o más
    imagen: String,
    remuneracion: String,//Por hora, Por mes, Por año, Negociable, Pretendida
});

var Empleos = mongoose.model('empleo', empleoSchema);
console.log("se creo modelo Empleos");
module.exports = Empleos;