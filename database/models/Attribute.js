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
            through: models.Product_attribute, // Como la tabla pivot tiene un modelo ya que ademas de los ids tiene datos extra, en vez de hacer la relacion a traves del nombre de la tabla "Products_attributes", la relacionamos con el modelo que definimos en el proyecto (models.Product_attribute)
            foreignKey: "attribute_id",
            otherKey: "attribute_product_id",
            timestamps: true
            })
    }
    return Attribute
}