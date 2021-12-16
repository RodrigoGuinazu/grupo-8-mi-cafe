module.exports = (sequelize, dataTypes) => {
    let alias = "Attribute";
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
        }
    };
    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    };

    const Attribute = sequelize.define(alias, cols, config);

    Attribute.associate = function(models) {
        Attribute.belongsToMany(models.Product, {
            as: "products",
            through:"products_attributes",
            foreignKey: "attribute_id",
            otherKey: "attribute_product_id",
            timestamps: true
            })
    }
    return Attribute
}