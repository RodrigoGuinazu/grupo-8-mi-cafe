-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mi_cafe
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mi_cafe
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mi_cafe` DEFAULT CHARACTER SET utf8 ;
USE `mi_cafe` ;

-- -----------------------------------------------------
-- Table `mi_cafe`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mi_cafe`.`roles` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL DEFAULT 'user',
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mi_cafe`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mi_cafe`.`users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `role_id` BIGINT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `role_id`
    FOREIGN KEY (`id`)
    REFERENCES `mi_cafe`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mi_cafe`.`profiles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mi_cafe`.`profiles` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id_profile` BIGINT NOT NULL,
  `birthdate` DATE NULL,
  `age` TINYINT(3) NULL,
  `name` VARCHAR(100) NOT NULL,
  `lastname` VARCHAR(100) NOT NULL,
  `image` VARCHAR(100) NULL,
  `gender` VARCHAR(1) NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `user_id_profile`
    FOREIGN KEY (`id`)
    REFERENCES `mi_cafe`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mi_cafe`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mi_cafe`.`categories` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(50) NULL,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mi_cafe`.`weights`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mi_cafe`.`weights` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `weight` INT(4) UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mi_cafe`.`colors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mi_cafe`.`colors` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `color` VARCHAR(50) NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mi_cafe`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mi_cafe`.`products` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `price` DECIMAL NOT NULL,
  `description` TEXT NOT NULL,
  `image` VARCHAR(100) NOT NULL,
  `category_id` BIGINT NOT NULL,
  `weight_id` BIGINT NULL,
  `colors_id` BIGINT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `category_id`
    FOREIGN KEY (`id`)
    REFERENCES `mi_cafe`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `weight_id`
    FOREIGN KEY (`id`)
    REFERENCES `mi_cafe`.`weights` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `colors_id`
    FOREIGN KEY (`id`)
    REFERENCES `mi_cafe`.`colors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mi_cafe`.`addresses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mi_cafe`.`addresses` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `province` VARCHAR(100) NOT NULL,
  `city` VARCHAR(100) NOT NULL,
  `zip_code` VARCHAR(8) NOT NULL,
  `street` VARCHAR(100) NOT NULL,
  `number` INT NOT NULL,
  `flat` INT NULL,
  `apartment` VARCHAR(10) NULL,
  `profile_id_address` BIGINT UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `profile_id_address`
    FOREIGN KEY (`id`)
    REFERENCES `mi_cafe`.`profiles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mi_cafe`.`payment_methods`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mi_cafe`.`payment_methods` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  `cardholder_name` VARCHAR(50) NOT NULL,
  `card_number` INT(16) UNSIGNED NOT NULL,
  `expiration_date` TINYINT(4) UNSIGNED NOT NULL,
  `security_code` INT(4) UNSIGNED NOT NULL,
  `profile_id_payment` BIGINT UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `profile_id_payment`
    FOREIGN KEY (`id`)
    REFERENCES `mi_cafe`.`profiles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mi_cafe`.`carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mi_cafe`.`carts` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `total` DECIMAL NOT NULL,
  `user_id_cart` BIGINT NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `user_id_cart`
    FOREIGN KEY (`id`)
    REFERENCES `mi_cafe`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mi_cafe`.`products_carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mi_cafe`.`products_carts` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `cart_id` BIGINT NOT NULL,
  `product_id` BIGINT NOT NULL,
  `product_total` TINYINT UNSIGNED NOT NULL,
  `subtotal` DECIMAL UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `cart_id`
    FOREIGN KEY (`id`)
    REFERENCES `mi_cafe`.`carts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `product_id`
    FOREIGN KEY (`id`)
    REFERENCES `mi_cafe`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;