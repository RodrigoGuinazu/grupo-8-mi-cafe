module.exports = (sequelize, dataTypes) => {
    let alias = "Category";
    let cols = {
        id: {
            type: dataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        category: {
            type: dataTypes.STRING,
            allowNull: true
        }
    };
    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models){
        Category.hasMany(models.Product, {
            as: "product_category",
            foreignKey: "category_id"
        })
    }
    return Category
}