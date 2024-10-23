
module.exports=(sequelize,DataTypes)=>{
    const Category_Document=sequelize.define('Category_Document',{

        id_category_Document: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },        
        name_Category:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{timeStamps:false})

    Category_Document.associate = (models) => {
        Category_Document.hasMany(models.Document, { foreignKey: 'id_category_Document' });
    };

    return Category_Document

}

