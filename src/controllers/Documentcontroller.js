const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { Document, Category_Document } = require('../models'); // Asegúrate de importar el modelo Document y Category_Document
const { error } = require('console');

// Método para crear un documento
const createDocument = async (req, res) => {
    try {
        const file = req.file;
        
        
        const { id_category_Document } = req.body; // Extrae el id_category_document del cuerpo de la solicitud

        console.log('id_category_document:', id_category_Document);

        if (!file) {
            return res.status(400).json({ error: 'No se ha proporcionado ningún archivo' });
        }

        if (!id_category_Document) {
            return res.status(400).json({ error: 'El id_category_document es requerido' });
            
            
        }

        const uploadPath = path.join(__dirname, 'uploads', 'documents');

        // Verifica si el directorio existe, si no, lo crea
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }

        const filePath = path.join(uploadPath, file.originalname);
        fs.renameSync(file.path, filePath); // Mueve el archivo cargado a la ruta de almacenamiento

        const hashedRoute = crypto.createHash('sha256').update(filePath).digest('hex');

        // Crear el documento en la base de datos
        const document = await Document.create({
            route: hashedRoute,
            original_filename: file.originalname,
            creation_date: new Date(),
            id_category_Document:id_category_Document
        });

        res.status(201).json(document);
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
};


// Método para obtener todos los documentos
const getAllDocuments = async (req, res) => {
    try {
        const documents = await Document.findAll(); // Obtener todos los documentos

        // Respuesta exitosa
        res.status(200).json(documents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createDocument,
    getAllDocuments // Exportar el nuevo método
};
