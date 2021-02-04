module.exports = (sequelize, dataTypes) => {
    let alias = "Address";
    let cols = {
        id: {
            type: dataTypes.BIGINT,
            PrimaryKey: true,
            UNSIGNED: true,
            autoIncrement: true
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
        nomber: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        flat: {
            type: dataTypes.STRING,
        },
        apartment: {
            type: dataTypes.STRING,
        },
        city: {
            type: dataTypes.STRING,
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
        Address.belongsTo(models.User, {
            as: "profiles",
            foreignKey: "profile_id_address"
        })
    }
    
    return Address
}