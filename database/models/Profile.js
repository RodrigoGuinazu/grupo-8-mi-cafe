module.exports = (sequelize, dataTypes) => {
    let alias = "Profile";
    let cols = {
        id: {
            type: dataTypes.BIGINT,
            PrimaryKey: true,
            UNSIGNED: true,
            autoIncrement: true
        },
        user_id_profile: {
            type: dataTypes.BIGINT,
            UNSIGNED: true
        },
        birthdate: {
            type: dataTypes.DATE
        },
        age: {
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        },
        lastname: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
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
            as: "user_id",
            foreignKey: "user_id_profile"
        })
    }
    
    return Profile
}