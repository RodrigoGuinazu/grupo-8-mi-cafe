module.exports = (sequelize, dataTypes) => {
    let alias = "Profile";
    let cols = {
        id: {
            type: dataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id_profile: {
            type: dataTypes.BIGINT.UNSIGNED,
            allowNull: false
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
            type: dataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: dataTypes.STRING,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING,
            allowNull: true
        },
        gender: {
            type: dataTypes.STRING(1),
            allowNull: false
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
            as: "user_profile",
            foreignKey: "user_id_profile"
        }),/*REVISAR CON  ALE !!!*/
        Profile.hasMany(models.Payment_method, {
            as: "payment_profile",
            foreignKey: "profile_id_payment"
        }),
        Profile.hasMany(models.Address, {
            as: "address_profile",
            foreignKey: "profile_id_address"
        })
    }
    
    return Profile
}