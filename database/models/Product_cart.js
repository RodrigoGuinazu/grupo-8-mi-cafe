module.exports = (sequelize, dataTypes) => {
    let alias = "Product_cart";
    let cols = {
        id: {
            type: dataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cart_id: {
            type: dataTypes.BIGINT.UNSIGNED,
            allowNull: false
        },
        cart_product_id: {
            type: dataTypes.BIGINT.UNSIGNED,
            allowNull: false
        },
        product_total: {
            type: dataTypes.TINYINT.UNSIGNED,
            allowNull: false
        },
        subtotal: {
            type: dataTypes.DECIMAL.UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    };

    const Product_cart = sequelize.define(alias, cols, config);
    
    return Product_cart
}