module.exports = (sequelize, dataTypes) => {
    let alias = "Address";
    let cols = {
        id: {
            type: dataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        province: {
            type: dataTypes.STRING,
            allowNull: false
        },
        city: {
            type: dataTypes.STRING,
            allowNull: false
        },
        zip_code: {
            type: dataTypes.STRING(8),
            allowNull: false
        },
        street: {
            type: dataTypes.STRING,
            allowNull: false
        },
        number: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        flat: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        apartment: {
            type: dataTypes.STRING(10),
            allowNull: true
        },
        profile_id_address: {
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

    const Address = sequelize.define(alias, cols, config);

    Address.associate = function(models){
        Address.belongsTo(models.Profile, {
            as: "profile",
            foreignKey: "profile_id_address"
        })
    }
    
    return Address
}