module.exports = (sequelize, dataTypes) => {
    let alias = "Profile";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            PrimaryKey: true,
            UNSIGNED: true,
            autoIncrement: true
        },
        user_id_profile: {
            type: dataTypes.BIGINT,
            UNSIGNED: true
        },
        birthdate: {
            type: dataTypes.DATE
        },
        age: {
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        },
        lastname: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        gender: {
            type: dataTypes.STRING(1)
        }
    };
    let config = {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at"
    };

    const Profile = sequelize.define(alias, cols, config);
    
    return Profile
}

//CREATE TABLE IF NOT EXISTS `mi_cafe`.`profiles` (
    //`id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    //`user_id_profile` BIGINT UNSIGNED NOT NULL,
    //`birthdate` DATE NULL,
    //`age` TINYINT(3) NULL,
    //`name` VARCHAR(100) NOT NULL,
    //`lastname` VARCHAR(100) NOT NULL,
    //`image` VARCHAR(100) NULL,
    //`gender` VARCHAR(1) NOT NULL,
    //`created_at` TIMESTAMP NOT NULL,
    //`updated_at` TIMESTAMP NULL,
    //`deleted_at` TIMESTAMP NULL,
    PRIMARY KEY (`id`),
    INDEX `user_id_profile_idx` (`user_id_profile` ASC),
    CONSTRAINT `user_id_profile`
      FOREIGN KEY (`user_id_profile`)
      REFERENCES `mi_cafe`.`users` (`id`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION)
  ENGINE = InnoDB