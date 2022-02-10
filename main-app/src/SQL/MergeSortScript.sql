DROP SCHEMA mergesort;
CREATE SCHEMA mergesort;

USE mergesort;

CREATE TABLE Customer(
userID INT NOT NULL AUTO_INCREMENT,
emailAddress VARCHAR(80) UNIQUE,
LevelOneTime DOUBLE,
LevelTwoTime DOUBLE,
LevelThreeTime DOUBLE,
LevelFourTime DOUBLE,
LevelFiveTime DOUBLE,
LevelReached INT NOT NULL
);
