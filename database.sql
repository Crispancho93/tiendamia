CREATE DATABASE tiendamia;

CREATE TABLE ordenes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    create_date DATE NOT NULL,
    status VARCHAR(15) NOT NULL,
    cliente VARCHAR(45) NOT NULL,
    shipping_address DATE NOT NULL,
    shipping_promise DATE NOT NULL
)

CREATE TABLE items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    title VARCHAR(45) NOT NULL,
    description VARCHAR(45) NOT NULL,
    url VARCHAR(45) NOT NULL,
    price FLOAT NOT NULL,
    quantity VARCHAR(45) NOT NULL,

    FOREIGN KEY (order_id) REFERENCES ordenes(id)
)

INSERT INTO ordenes(create_date, status, cliente, shipping_address, shipping_promise)
VALUES('2022-08-18')