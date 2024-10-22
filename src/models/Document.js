
module.exports=(sequielize,DataTypes)=>{
    const Document=sequielize.define('Document',{

        id_Document:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },

        creation_date:{
            type:DataTypes.DATE,
            allowNull:false
        },

        ruta:{
            type:DataTypes.STRING,
            allowNull:false
        },

        id_category_document:{
            type:DataTypes.INTEGER,
            allowNull:false,
                references:{
                    model:"Category_Document",
                    key:"id_category_document"
                }
        }


    },{timeStamps:false})

    Document.associate=(models)=>{
        Document.belongsTo(models.CategoryDocument,{
            foreignKey:'id_category_document'
        }),
        Document.belongsTo(models.User),{
            foreignKey:'id_user'
        }
    }


    return Document
}