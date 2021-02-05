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
            as: "user_role",
            foreignKey: "role_id"
        }),/*REVISAR CON ALE !!!*/
        User.hasMany(models.Profile, {
            as: "user_profile",
            foreignKey: "user_id_profile"
        })
    }
    
    return User
}

