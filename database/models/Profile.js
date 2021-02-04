module.exports = (sequelize, dataTypes) => {
    let alias = "Profile";
    let cols = {
        id: {
            type: dataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        user_id_profile: {
            type: dataTypes.BIGINT.UNSIGNED
        },
        birthdate: {
            type: dataTypes.DATE,
            allowNull: true
        },
        age: {
            type: dataTypes.TINYINT(3),
            allowNull: true
        },
        name: {
            type: dataTypes.STRING
        },
        lastname: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING,
            allowNull: true
        },
        gender: {
            type: dataTypes.STRING(1)
        }
    };
    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    };

    const Profile = sequelize.define(alias, cols, config);

    Profile.associate = function(models){
        Profile.belongsTo(models.User, {
            as: "user",
            foreignKey: "user_id_profile"
        })
    }
    
    return Profile
}