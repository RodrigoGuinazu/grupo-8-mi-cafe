module.exports = (sequelize, dataTypes) => {
    let alias = "Product_attribute";
    let cols = {
        id: {
            type: dataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        attribute_product_id: {
            type: dataTypes.BIGINT.UNSIGNED
        },
        attribute_id: {
            type: dataTypes.BIGINT.UNSIGNED
        },
        value: {
            type: dataTypes.STRING
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        deleted_at: {
            type: dataTypes.DATE
        }
    };
    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    };

    const Product_attribute = sequelize.define(alias, cols, config);
    
    return Product_attribute
}

