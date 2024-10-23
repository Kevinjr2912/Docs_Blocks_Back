const express = require('express');
const router = express.Router();
const controllerDocument = require('../controllers/documentController.js'); // Asegúrate de que la ruta sea correcta
const upload = require('../middleware/upload.js'); // Archivo que configura multer

// Ruta para subir documentos con multer
router.post('/document', upload.single('file'), controllerDocument.createDocument);
router.get('/:id_user',controllerDocument.getDocuments)
module.exports = router;
