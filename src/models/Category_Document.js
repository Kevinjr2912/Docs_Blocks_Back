const { DataTypes } = require("sequelize");


module.exports=(sequelize,DataTypes)=>{
    const Category_Document=sequelize.define('Category_Document',{

        id_category_Document:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name_Category:{
            type:STRING,
            allowNull:false
        }
    },{timeStamps:false})

    return Category_Document
    
}

