module.exports = (sequelize, dataTypes) => {
    let alias = "Product_attribute";
    let cols = {
        id: {
            type: dataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        attribute_product_id: {
            type: dataTypes.BIGINT.UNSIGNED,
            allowNull: false
        },
        attribute_id: {
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

    const Product_attribute = sequelize.define(alias, cols, config);
    
    return Product_attribute
}

