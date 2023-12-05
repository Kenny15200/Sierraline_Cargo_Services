-- Create a database (if it doesn't exist)
CREATE DATABASE IF NOT EXISTS sierraline_db;

-- Use the newly created database
USE sierraline_db;

-- Create a table to store contact information
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    message TEXT NOT NULL
);

-- Optional: Add an index for better performance if needed
CREATE INDEX idx_email ON contacts (email);
