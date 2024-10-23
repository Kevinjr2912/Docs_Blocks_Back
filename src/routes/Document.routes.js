const express = require('express');
const router = express.Router();
const controllerDocument = require('../controllers/Documentcontroller.js'); // Asegúrate de que la ruta sea correcta
const upload = require('../middleware/upload.js'); // Archivo que configura multer

// Ruta para subir documentos con multer
router.post('/documents', upload.single('file'), controllerDocument.createDocument);
router.get('/obtener',controllerDocument.getAllDocuments)
module.exports = router;
