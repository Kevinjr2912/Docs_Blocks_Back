module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id_user: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name_user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email_user: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
    }, {
        timestamps: false
    });

    User.associate = (models) => {
        User.hasMany(models.BankCard, {
            foreignKey: 'id_user'
        });

        User.hasMany(models.Document, {
            foreignKey: 'id_user'
        });

        User.hasMany(models.Nft, {
            foreignKey: 'id_user'
        });
    }

    return User;
};
