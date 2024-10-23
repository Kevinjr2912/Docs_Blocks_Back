module.exports = (sequelize, DataTypes) => {
    const Document = sequelize.define('Document', {
        id_Document: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        route: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        original_filename: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        creation_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        id_category_Document: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Category_Documents', // Nombre de la tabla
                key: 'id_category_Document' // Clave foránea
            }
        }
        
    }, { timestamps: false });

    Document.associate = (models) => {
        Document.belongsTo(models.Category_Document, { foreignKey: 'id_category_Document' });
    };

    return Document;
};
