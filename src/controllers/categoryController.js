const { CategoryDocument } = require('../models'); // Asegúrate de importar el modelo

const createCategoryDocument = async (req, res) => {
    try {
        // Asegúrate de que el cuerpo de la solicitud contenga el campo `name_Category`
        const { name_category } = req.body;

        if (!name_category) {
            return res.status(400).json({ error: 'The name of category is necesary' });
        }

        // Crear la nueva categoría en la base de datos
        const categoryDocument = await CategoryDocument.create({
            name_category
        });

        res.status(201).json(categoryDocument); // Devuelve la categoría creada
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createCategoryDocument
};
