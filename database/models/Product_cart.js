module.exports = (sequelize, dataTypes) => {
    let alias = "Product_cart";
    let cols = {
        id: {
            type: dataTypes.BIGINT,
            PrimaryKey: true,
            autoIncrement: true
        },
        cart_id: {
            type: dataTypes.BIGINT.UNSIGNED
        },
        product_id: {
            type: dataTypes.BIGINT.UNSIGNED
        },
        product_total: {
            type: dataTypes.TINYINT
        },
        subtotal: {
            type: dataTypes.DECIMAL
        }
    };
    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    };

    const Product_cart = sequelize.define(alias, cols, config);

    /*Product_cart.associate = function(models){
        Product.belongsToMany(models.Cart, {
            as: "carts",
            foreignKey: "cart_id"
        }),
        Cart.belongsToMany(models.Product, {
            as: "products",
            foreignKey: "product_id"
        })
    }*/
    
    return Product_cart
}