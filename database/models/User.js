module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        role_id: {
            type: dataTypes.BIGINT.UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.belongsTo(models.Role, {
            as: "role",
            foreignKey: "role_id"
        }),
        User.hasOne(models.Profile, {
            as: "profile",
            foreignKey: "user_id_profile"
        }),
        User.hasMany(models.Cart, {
            as: "carts",
            foreignKey: "user_id_cart"
        })
    }
    
    return User
}

