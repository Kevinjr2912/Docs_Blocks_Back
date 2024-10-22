module.exports = (sequelize, Datatypes) => {
    const Card = sequelize.define('Card', {
        card_number: {
            type: Datatypes.INTEGER,
            primaryKey: true,
        },
        id_user: {
            type: Datatypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id_user'
            }
        },
        holder: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        expiration_date: {
            type: Datatypes.DATEONLY,
            allowNull: false
        },
        cvv: {
            type: Datatypes.INTEGER,
            allowNull: false
        }
    },{ timeStamps: false });


    Card.associate = (models) => {
        Card.belongsTo(models.User, {
            foreingKey: 'id_user',
        });
    }

    return Card;
}