CREATE TABLE database_test.product (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(255),
    product_price DECIMAL(10, 2),
    product_descrip TEXT,
    category_id INT,
    pic_byte BLOB,
    FOREIGN KEY (category_id) REFERENCES database_test.category(category_id)
);
