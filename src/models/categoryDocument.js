module.exports=(sequelize, DataTypes)=>{
    const CategoryDocument = sequelize.define('CategoryDocument',{

        id_category_document: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },        
        name_category:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{timeStamps:false})

    CategoryDocument.associate = (models) => {
        CategoryDocument.hasMany(models.Document, { foreignKey: 'id_category_document' });
    };

    return CategoryDocument

}

