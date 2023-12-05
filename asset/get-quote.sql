-- Create a database (if it doesn't exist)
CREATE DATABASE IF NOT EXISTS sierraline_db;

-- Use the newly created database
USE sierraline;

-- Create a table to store contact information
CREATE TABLE IF NOT EXISTS get_quote (
    id INT AUTO_INCREMENT PRIMARY KEY,
    origin_country VARCHAR(255),
    destination VARCHAR(255),
    quantity INT,
    weight VARCHAR(20),
    height VARCHAR(20),
    length VARCHAR(20),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
