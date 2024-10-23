const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const DocumentRouter=require('./routes/Document.routes')
const UserRouter=require('./routes/userRoutes.routes')
const categoryRoutes=require('./routes/categoryRoutes.routes')
// Configurar CORS
app.use(cors({
  origin: 'http://localhost:4200' // Permitir solicitudes desde esta URL
}));

app.use(bodyParser.json())

//Cargar rutas
app.use('/documents', DocumentRouter);
app.use('/users',UserRouter)
app.use('/categories',categoryRoutes)
module.exports=app;
console.log("hola");
