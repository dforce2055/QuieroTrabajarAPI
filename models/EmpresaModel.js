var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var empresaSchema = new Schema({
    razon_social: String,
    nombre: String,
    apellido: String,
    domicilio: String,
    localidad: String,
    provincia: String,
    cp: String,//código postal
    web: String,
    facebook: String,
    twitter: String,
    instagram: String,
    mail: String
});

var Empresas = mongoose.model('empresa', empresaSchema);
console.log("se creo modelo Empresas");
module.exports = Empresas;