module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.BIGINT,
            PrimaryKey: true,
            UNSIGNED: true,
            autoIncrement: true
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
            type: dataTypes.BIGINT,
            UNSIGNED: true
        },
        weight_id: {
            type: dataTypes.BIGINT,
            UNSIGNED: true
        },
        colors_id: {
            type: dataTypes.BIGINT,
            UNSIGNED: true
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
        Product.belongsTo(models.Color, {
            as: "colors",
            foreignKey: "colors_id"
        }),
        Product.belongsTo(models.Weight, {
            as: "weights",
            foreignKey: "weight_id"
        }),
        Product.belongsTo(models.Category, {
            as: "categories",
            foreignKey: "category_id"
        })
    }
    
    return Product
}