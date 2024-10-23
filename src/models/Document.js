module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define(
    "Document",
    {
      id_document: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
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
      id_category_document: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "CategoryDocuments", // Nombre de la tabla
          key: "id_category_document", // Clave foránea
        },
      },
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id_user",
        },
      },
    },
    { timestamps: false }
  );

  Document.associate = (models) => {
    Document.belongsTo(models.CategoryDocument, {
      foreignKey: "id_category_document",
    });
    
    Document.belongsTo(models.User, { foreignKey: "id_user" });
  };

  return Document;
};
