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
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: dataTypes.STRING,
            allowNull: false
        },
        role_id: {
            type: dataTypes.BIGINT.UNSIGNED,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING,
            allowNull: true
        },
        birthdate: {
            type: dataTypes.DATE,
            allowNull: true
        },
        gender: {
            type: dataTypes.STRING(1),
            allowNull: true
        }
    };
    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        paranoid: true
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.belongsTo(models.Role, {
            as: "role",
            foreignKey: "role_id"
        }),
        User.hasMany(models.Cart, {
            as: "carts",
            foreignKey: "user_id_cart"
        }),
        User.hasMany(models.Payment_method, {
            as: "payments",
            foreignKey: "user_id_payment"
        }),
        User.hasMany(models.Address, {
            as: "addresses",
            foreignKey: "user_id_address"
        })
    }
    
    return User
}

