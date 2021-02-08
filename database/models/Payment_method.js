module.exports = (sequelize, dataTypes) => {
    let alias = "Payment_method";
    let cols = {
        id: {
            type: dataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        type: {
            type: dataTypes.STRING,
            allowNull: false
        },
        cardholder_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        card_number: {
            type: dataTypes.BIGINT(16).UNSIGNED,
            allowNull: false
        },
        expiration_date: {
            type: dataTypes.INTEGER(4).UNSIGNED,
            allowNull: false
        },
        security_code: {
            type: dataTypes.INTEGER(4).UNSIGNED,
            allowNull: false
        },
        profile_id_payment: {
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

    const Payment_method = sequelize.define(alias, cols, config);
    
    Payment_method.associate = function(models){
        Payment_method.belongsTo(models.User, {
            as: "user",
            foreignKey: "user_id_payment"
        })
    }

    return Payment_method
}