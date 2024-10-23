module.exports = (sequelize, DataTypes) => {
    const Nft = sequelize.define('Nft',{
        id_nft: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id_user'
            }
        },
        id_document: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Documents',
                key: 'id_document'
            }
        },
        id_token: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hash_transaction: {
            type: DataTypes.STRING,
            allowNull: false
        },
        network_blockchain: {
            type: DataTypes.STRING,
            allowNull: false
        },
        creation_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        metadata_url: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{ timeStamps: false });

    Nft.associate = (models) => {
        Nft.belongsTo(models.User, {
            foreignKey: 'id_user'
        });

        Nft.belongsTo(models.Document, {
            foreignKey: 'id_document'
        });
    }

    return Nft;
}