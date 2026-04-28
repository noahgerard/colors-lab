CREATE TABLE IF NOT EXISTS Users (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  Login VARCHAR(50) UNIQUE,
  Password VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS Colors (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  UserId INT,
  Name VARCHAR(50),
  FOREIGN KEY (UserId) REFERENCES Users(ID)
);

INSERT INTO Users (firstName, lastName, Login, Password) VALUES ('Test', 'User', 'test', 'test')
  ON DUPLICATE KEY UPDATE firstName=VALUES(firstName), lastName=VALUES(lastName), Password=VALUES(Password);
