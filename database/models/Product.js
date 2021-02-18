module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(10,2), /*CONSULTAR ALE*/
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING,
            allowNull: false
        },
        category_id: {
            type: dataTypes.BIGINT.UNSIGNED,
            allowNull: false
        },
    };
    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        paranoid: true
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id"
        }),
        Product.belongsToMany(models.Attribute, {
            as: "attributes",
            through: "products_attributes",
            foreignKey: "attribute_product_id",
            otherKey: "attribute_id",
            timestamps: true
        }),
        Product.belongsToMany(models.Cart, {
            as: "carts",
            through: models.Product_cart, // Como la tabla pivot tiene un modelo ya que ademas de los ids tiene datos extra, en vez de hacer la relacion a traves del nombre de la tabla "Products_carts", la relacionamos con el modelo que definimos en el proyecto (models.Product_cart)
            foreignKey: "cart_id",
            otherKey: "cart_product_id",
            timestamps: true
        })
    }
    
    return Product
}