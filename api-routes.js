// Initialize express router
let router = require('express').Router();
let apiController = require('./controllers/apiControllers');



// Set default API response
router.get('/', function (req, res) {
    res.json(
        {
            status: 'API Quiero Trabajar It´s Working ON!',
            message: 'Welcome to RESTHub crafted with love!',
        });
});

//EndPoint para leer toda la base candidatos
router.get('/leerCandidatos', function (req, res) {
    console.log("Leer Candidatos");
    apiController.getCandidatos(req, res);
});


//EndPoint para leer toda la base empresas
router.get('/leerEmpresas', function (req, res) {
    console.log("Leer Empresas");
    apiController.getEmpresas(req, res);
});

//EndPoint para leer toda la base empleos
router.get('/leerEmpleos', function (req, res) {
    console.log("Leer Empleos");
    apiController.getEmpleos(req, res);
});

//EndPoint para leer con filtro
router.post('/leerEmpleos/?title', function (req, res) {
    console.log("Buscar empleos por Titulo");
    apiController.getEmpleosByTitle(req, res);
});

/*
//EndPoint para leer toda la base
router.get('/leerAgenda', function (req, res) {
    console.log("leer");
    apiController.getContactos(req, res);
});
//EndPoint para leer con filtro
router.post('/leerAgenda/?idBusqueda', function (req, res) {
    console.log("leer con filtro");
    apiController.getContactosById(req, res);
});
//EndPoint para insertar en la BD
router.post('/insertContacto/Contacto', function (req, res) {
    console.log(req.body);
    apiController.insertContacto(req, res);
});

//EndPoint para modificar en la BD
router.post('/updateContacto/Contacto', function (req, res) {
    apiController.updateContacto(req, res);
});

//EndPoint para eliminar en la BD
router.delete('/deleteContacto/Contacto', function (req, res) {
    apiController.deleteContacto(req, res);
});
*/
// Export API routes
module.exports = router;