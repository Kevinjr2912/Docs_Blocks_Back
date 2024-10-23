const { Category_Document } = require('../models'); // Asegúrate de importar el modelo

const createCategoryDocument = async (req, res) => {
    try {
        // Asegúrate de que el cuerpo de la solicitud contenga el campo `name_Category`
        const { name_Category } = req.body;

        if (!name_Category) {
            return res.status(400).json({ error: 'El nombre de la categoría es obligatorio' });
        }

        // Crear la nueva categoría en la base de datos
        const categoryDocument = await Category_Document.create({
            name_Category
        });

        res.status(201).json(categoryDocument); // Devuelve la categoría creada
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createCategoryDocument
};
