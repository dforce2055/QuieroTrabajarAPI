var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var candidatoSchema = new Schema({
    nombre: String,
    apellido: String,
    domicilio: String,
    localidad: String,
    provincia: String,
    cp: String,//código postal
    cumple: String,
    dni: String,
    mail: String
});

var Candidatos = mongoose.model('candidato', candidatoSchema);
console.log("se creo modelo Canditatos");
module.exports = Candidatos;