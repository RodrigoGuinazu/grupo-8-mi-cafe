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
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
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
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `role_id` BIGINT UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `role_id_idx` (`role_id` ASC),
  CONSTRAINT `role_id`
    FOREIGN KEY (`role_id`)
    REFERENCES `mi_cafe`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mi_cafe`.`profiles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mi_cafe`.`profiles` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id_profile` BIGINT UNSIGNED NOT NULL,
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
  INDEX `user_id_profile_idx` (`user_id_profile` ASC),
  CONSTRAINT `user_id_profile`
    FOREIGN KEY (`user_id_profile`)
    REFERENCES `mi_cafe`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mi_cafe`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mi_cafe`.`categories` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(50) NULL,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mi_cafe`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mi_cafe`.`products` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `price` DECIMAL NOT NULL,
  `description` TEXT NOT NULL,
  `image` VARCHAR(100) NOT NULL,
  `category_id` BIGINT UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `category_id_idx` (`category_id` ASC),
  CONSTRAINT `category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `mi_cafe`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mi_cafe`.`addresses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mi_cafe`.`addresses` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
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
  INDEX `profile_id_address_idx` (`profile_id_address` ASC),
  CONSTRAINT `profile_id_address`
    FOREIGN KEY (`profile_id_address`)
    REFERENCES `mi_cafe`.`profiles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mi_cafe`.`payment_methods`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mi_cafe`.`payment_methods` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
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
  INDEX `profile_id_payment_idx` (`profile_id_payment` ASC),
  CONSTRAINT `profile_id_payment`
    FOREIGN KEY (`profile_id_payment`)
    REFERENCES `mi_cafe`.`profiles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mi_cafe`.`carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mi_cafe`.`carts` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `total` DECIMAL NOT NULL,
  `user_id_cart` BIGINT UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id_cart_idx` (`user_id_cart` ASC),
  CONSTRAINT `user_id_cart`
    FOREIGN KEY (`user_id_cart`)
    REFERENCES `mi_cafe`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mi_cafe`.`products_carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mi_cafe`.`products_carts` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `cart_id` BIGINT UNSIGNED NOT NULL,
  `cart_product_id` BIGINT UNSIGNED NOT NULL,
  `product_total` TINYINT UNSIGNED NOT NULL,
  `subtotal` DECIMAL UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `cart_id_idx` (`cart_id` ASC),
  INDEX `product_id_idx` (`cart_product_id` ASC),
  CONSTRAINT `cart_id`
    FOREIGN KEY (`cart_id`)
    REFERENCES `mi_cafe`.`carts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cart_product_id`
    FOREIGN KEY (`cart_product_id`)
    REFERENCES `mi_cafe`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mi_cafe`.`attributes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mi_cafe`.`attributes` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mi_cafe`.`products_attributes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mi_cafe`.`products_attributes` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `attribute_product_id` BIGINT UNSIGNED NOT NULL,
  `attribute_id` BIGINT UNSIGNED NOT NULL,
  `value` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `product_id_idx` (`attribute_product_id` ASC),
  INDEX `attribute_id_idx` (`attribute_id` ASC),
  CONSTRAINT `attribute_product_id`
    FOREIGN KEY (`attribute_product_id`)
    REFERENCES `mi_cafe`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `attribute_id`
    FOREIGN KEY (`attribute_id`)
    REFERENCES `mi_cafe`.`attributes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
