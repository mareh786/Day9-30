
CREATE DATABASE IF NOT EXISTS bookdb;
USE bookdb;

CREATE TABLE IF NOT EXISTS books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  genre VARCHAR(100)
);

INSERT INTO books (title, genre) VALUES
('The Great Gatsby', 'fiction'),
('Sapiens', 'non-fiction'),
('Atomic Habits', 'self-help');
