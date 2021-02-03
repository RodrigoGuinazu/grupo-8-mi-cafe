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
    
    return Product
}

//CREATE TABLE IF NOT EXISTS `mi_cafe`.`products` (
    //`id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    //`name` VARCHAR(100) NOT NULL,
    //`price` DECIMAL NOT NULL,
    //`description` TEXT NOT NULL,
    //`image` VARCHAR(100) NOT NULL,
    //`category_id` BIGINT UNSIGNED NOT NULL,
    //`weight_id` BIGINT UNSIGNED NULL,
    //`colors_id` BIGINT UNSIGNED NULL,
    //`created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
    //`updated_at` TIMESTAMP NULL DEFAULT NULL,
    //`deleted_at` TIMESTAMP NULL,
    PRIMARY KEY (`id`),
    INDEX `category_id_idx` (`category_id` ASC),
    INDEX `weight_id_idx` (`weight_id` ASC),
    INDEX `colors_id_idx` (`colors_id` ASC),
    CONSTRAINT `category_id`
      FOREIGN KEY (`category_id`)
      REFERENCES `mi_cafe`.`categories` (`id`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
    CONSTRAINT `weight_id`
      FOREIGN KEY (`weight_id`)
      REFERENCES `mi_cafe`.`weights` (`id`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
    CONSTRAINT `colors_id`
      FOREIGN KEY (`colors_id`)
      REFERENCES `mi_cafe`.`colors` (`id`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION)
  ENGINE = InnoDB