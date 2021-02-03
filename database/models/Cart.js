module.exports = (sequelize, dataTypes) => {
    let alias = "Cart";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            PrimaryKey: true,
            UNSIGNED: true,
            autoIncrement: true
        },
        total: {
            type: dataTypes.DECIMAL
        },
        user_id_cart: {
            type: dataTypes.BIGINT,
            UNSIGNED: true
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
            as: "user_id",
            foreignKey: "user_id_cart"
        })
    }
    
    return Cart
}