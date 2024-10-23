module.exports = (sequelize, DataTypes) => {
    const Document = sequelize.define('Document', {
        id_Document: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        creation_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        original_filename: {
            type: DataTypes.STRING,
            allowNull: false
        },
        route: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        timestamps: false 
    });

    return Document;
};
