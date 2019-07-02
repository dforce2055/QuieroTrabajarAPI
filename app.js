const http = require('http');

//const hostname = '127.0.0.1';
//const port = 3001;

// Im	 express
var express = require('express')
//Import Body Parser
var bodyParser = require('body-parser');
var cors = require('cors');
// Initialize the server express
var app = express();

//Conectar BBDD
var urlBD = 'mongodb://localhost/quierotrabajar';
//var urlBD = 'mongodb+srv://mongo:mongos@aplicacionesinteractivas-wko5n.mongodb.net/quierotrabajar?retryWrites=true&w=majority';

//opciones conexion
var opts = { useNewUrlParser: true, connectTimeoutMS: 20000 };
//importo driver
var mongoose = require('mongoose');
//Pruebo conexion
mongoose.connect(urlBD, opts).then
  (
    () => {
      console.log("Conectado!!");
    }, //se conecto
    err => {
      console.log("ERROR:" + err);
    } //manejo error
  );


/*const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Quiero Trabajar\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

// Import router
var apiRoutes = require("./api-routes")

// Todo lo que recibe la app se tratara como json
app.use(bodyParser.urlencoded(
  {
    extended: true
  }));
app.use(bodyParser.json());
app.use(cors());

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Quiero Trabajar\n'));

// Use Api routes in the App
app.use('/apiQuieroTrabajar', apiRoutes);

// Launch app to listen to specified port
app.listen(port, function () {
  console.log("Running RestHub on port " + port);
});