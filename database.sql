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

INSERT INTO `ordenes` (`id`, `create_date`, `status`, `cliente`, `shipping_address`, `shipping_promise`) VALUES
(1, '2023-09-01', 'Approve', 'Carlos Mario', '2023-09-01', '2023-09-21'),
(2, '2023-09-01', 'Approve', 'Carlos Mario', '2023-09-01', '2023-09-18'),
(3, '2023-09-01', 'Cancel', 'Carlos Mario', '2023-09-01', '2023-09-19'),
(4, '2023-09-01', 'Cancel', 'Carlos Mario', '2023-09-01', '2023-09-18'),
(5, '2023-09-01', 'Delivery', 'Carlos Mario', '2023-09-01', '2023-09-20'),
(6, '2023-09-01', 'Approve', 'Carlos Mario', '2023-09-01', '2023-09-17'),
(7, '2023-09-01', 'Approve', 'Carlos Mario', '2023-09-01', '2023-09-18'),
(8, '2023-09-01', 'Delivery', 'Carlos Mario', '2023-09-01', '2023-09-10'),
(9, '2023-09-01', 'Traveling', 'Carlos Mario', '2023-09-01', '2023-09-03'),
(10, '2023-09-01', 'Approve', 'Carlos Mario', '2023-09-01', '2023-09-01'),
(11, '2023-09-01', 'Traveling', 'Carlos Mario', '2023-09-01', '2023-09-28');

INSERT INTO `items` (`id`, `order_id`, `title`, `description`, `url`, `price`, `quantity`) VALUES
(1, 1, 'Mouse', 'Gamer desc', 'https://www.google.com', 20, '5'),
(2, 1, 'Teclado', 'Teclado desc', 'https://www.google.com', 20, '5'),
(3, 2, 'Monitor', 'Monitor desc', 'https://www.google.com', 20, '5'),
(4, 2, 'Silla', 'Silla desc', 'https://www.google.com', 20, '5'),
(5, 3, 'Diadema', 'Diadema desc', 'https://www.google.com', 20, '5'),
(6, 3, 'SSD 250GB', 'SSD 250GB desc', 'https://www.google.com', 20, '5'),
(7, 4, 'Teclado inalambrico', 'Teclado inalambrico desc', 'https://www.google.com', 20, '5'),
(8, 4, 'Disco externo 500GB', 'Disco externo 500GB desc', 'https://www.google.com', 20, '5'),
(9, 5, 'Disco externo 100GB', 'Disco externo 100GB desc', 'https://www.google.com', 20, '5'),
(10, 5, 'Disco externo 2TB', 'Disco externo 2TB desc', 'https://www.google.com', 20, '5'),
(11, 6, 'Auriculares', 'Auriculares - desc', 'https://www.google.com', 20, '5'),
(12, 6, 'Lector QR', 'Lector QR - desc', 'https://www.google.com', 20, '5'),
(13, 7, 'Impresora', 'Impresora - desc', 'https://www.google.com', 20, '5'),
(14, 7, 'Cable USB', 'Cable USB - desc', 'https://www.google.com', 20, '5'),
(15, 8, 'Tablet', 'Tablet desc', 'https://www.google.com', 20, '5'),
(16, 8, 'Ipad', 'Ipad desc', 'https://www.google.com', 20, '5'),
(17, 9, 'Iphone', 'Iphone desc', 'https://www.google.com', 20, '5'),
(18, 10, 'Cargador', 'Cargador - desc', 'https://www.google.com', 20, '5'),
(19, 11, 'Cable iphone', 'Cable iphone desc', 'https://www.google.com', 20, '5'),
(20, 11, 'Mouse gamer v3', 'Mouse gamer v3 -desc', 'https://www.google.com', 20, '5');