DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(),
    department_name VARCHAR(),
    price DECIMAL(10,2),
    stock_quantity INT,
    PRIMARY KEY (item_id)
);

SELECT * FROM products;