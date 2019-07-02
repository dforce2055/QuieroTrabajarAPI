var Candidatos = require('../models/CandidatoModel');
var Empresas = require('../models/EmpresaModel');
var Empleos = require('../models/EmpleoModel');

let getCandidatos = (req, res) => 
{
    console.log("llegue a leer Candidatos");
    //Listar resultados
    Candidatos.find()
        .then
        (
            (listaCandidatos) => {
                res.send(listaCandidatos); //devuelvo resultado query   
                //console.log(listaCandidatos);    
            },
            (err) => { console.log(err); }
        )
};

let getEmpresas = (req, res) =>
{
    console.log("Llegue a leer Empresas");
    Empresas.find()
        .then
        (
            (listaEmpresas) => 
            {
                res.send(listaEmpresas);
            },
            (err) => { console.log(listaEmpresas); }
        )
};

let getEmpleos = (req, res) =>
{
    console.log("Llegue a leer Empleos");
    Empleos.find()
        .then
        (
            (listaEmpleos) =>
            {
                res.send(listaEmpleos);
            },
            (err) => { console.log(listaEmpleos); }
        )
};

let getEmpleosByTitle = (req, res) =>
{
    let title = {title : req.body.title};
    console.log("Título búscado: " + title.title);
    //res.send(title.title);
    
    // executes, title LIKE title.title and only selecting the "id", "titulo" and "localidad" fields
    // use regex
    /*Empleos.find({
        titulo: { $regex:title.title, $options: 'i'}}, 'id titulo localidad', function (err, empleo){
       if (err) {
           return console.log(err);
       }      
    })*/
    Empleos.find({ titulo: { $regex: title.title, $options: 'i' }})
            .where('fecha_pub').gt(2014)
            //.select({ titulo:1, localidad:1, remuneracion:1 })//filtro de campos
            .exec()
        .then
        (
            (empleos) =>
            {
                res.send(empleos);
            },
            (err) => { console.log("No encontre el empleo"); }
        )
        .catch(err => console.log('operation failed'))
        //.finally(console.log("Finalmente"))
};



module.exports = { getCandidatos, getEmpresas, getEmpleos, getEmpleosByTitle };