const express = require('express');
const { createCategoryDocument } = require('../controllers/categoryController.js');
const router = express.Router();

// Ruta para agregar una nueva categoría de documento
router.post('/category-document', createCategoryDocument);

module.exports = router;
