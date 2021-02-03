module.exports = (sequelize, dataTypes) => {
    let alias = "Cart";
    let cols = {
        id: {
            type: dataTypes.BIGINT,
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
    
    return Cart
}

//CREATE TABLE IF NOT EXISTS `mi_cafe`.`carts` (
    //`id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    //`total` DECIMAL NOT NULL,
    //`user_id_cart` BIGINT UNSIGNED NOT NULL,
    //`created_at` TIMESTAMP NOT NULL,
    //`updated_at` TIMESTAMP NULL,
    //`deleted_at` TIMESTAMP NULL,
    PRIMARY KEY (`id`),
    INDEX `user_id_cart_idx` (`user_id_cart` ASC),
    CONSTRAINT `user_id_cart`
      FOREIGN KEY (`user_id_cart`)
      REFERENCES `mi_cafe`.`users` (`id`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION)
  ENGINE = InnoDB