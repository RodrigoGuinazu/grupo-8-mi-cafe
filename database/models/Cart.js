module.exports = (sequelize, dataTypes) => {
    let alias = "Cart";
    let cols = {
        id: {
            type: dataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        total: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        user_id_cart: {
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

    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = function(models){
        Cart.belongsTo(models.User, {
            as: "user",
            foreignKey: "user_id_cart"
        }),
       Cart.belongsToMany(models.Product, {
            as: "products",
            through: models.Product_cart, // Como la tabla pivot tiene un modelo ya que ademas de los ids tiene datos extra, en vez de hacer la relacion a traves del nombre de la tabla "Products_carts", la relacionamos con el modelo que definimos en el proyecto (models.Product_cart)
            foreignKey: "cart_product_id",
            otherKey: "cart_id",
            timestamps: true
        })
    }
    
    return Cart
}