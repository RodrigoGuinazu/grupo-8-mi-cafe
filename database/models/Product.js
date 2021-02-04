module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING,
        },
        price: {
            type: dataTypes.DECIMAL
        },
        description: {
            type: dataTypes.TEXT
        },
        image: {
            type: dataTypes.STRING
        },
        category_id: {
            type: dataTypes.BIGINT.UNSIGNED,
        },
        weight_id: {
            type: dataTypes.BIGINT.UNSIGNED,
        },
        colors_id: {
            type: dataTypes.BIGINT.UNSIGNED,
        },
    };
    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id"
        })
    }
    
    return Product
}