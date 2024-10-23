const express = require('express');
const router = express.Router();
const documentController=require('../controllers/categoryController.js')

// Rutas para los documentos
router.post('/', documentController.createCategory);            // Crear un nuevo documento
 

module.exports = router;