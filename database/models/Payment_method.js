module.exports = (sequelize, dataTypes) => {
    let alias = "Payment_method";
    let cols = {
        id: {
            type: dataTypes.BIGINT,
            PrimaryKey: true,
            autoIncrement: true
        },
        type: {
            type: dataTypes.STRING
        },
        cardholder_name: {
            type: dataTypes.STRING
        },
        card_number: {
            type: dataTypes.INTEGER
        },
        expiration_date: {
            type: dataTypes.INTEGER
        },
        security_code: {
            type: dataTypes.INTEGER
        },
        profile_id_payment: {
            type: dataTypes.BIGINT(20)
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
        Payment_method.belongsTo(models.Profile, {
            as: "profile",
            foreignKey: "Profile_id_payment"
        })
    }

    return Payment_method
}