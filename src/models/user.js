module.exports = (sequelize, Datatypes) => {
    const User = sequelize.define('User', {
        id_user: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_user: {
            type: Datatypes.STRING,
            allowNull: false
        },
        last_name_user: {
            type: Datatypes.STRING,
            allowNull: false
        },
        email_user: {
            type: Datatypes.STRING,
            allowNull: false
        },
        password: {
            type:Datatypes.STRING,
            allowNull: false
        }
    },{ timestamps: false });

    return User;
}