CREATE TABLE cities(
    cityId int not null AUTO_INCREMENT,
    cityName varchar(70) not null,
    PRIMARY KEY (cityId)
);

CREATE TABLE districts(
    districtId int not null AUTO_INCREMENT,
    districtName varchar(70) not null,
    cityId int not null,
    PRIMARY KEY (districtId),
    FOREIGN KEY (cityId) REFERENCES cities(cityId)
);

CREATE TABLE ceps(
   cepId int not null AUTO_INCREMENT,
   cep varchar(8) unique not null,
   districtId int not null,
   PRIMARY KEY (cepId),
   FOREIGN KEY (districtId) REFERENCES districts(districtId)
);

create table users(
    userId int not null AUTO_INCREMENT,
    userName varchar(100) not null,
    userEmail varchar(60) not null,
    userPassword varchar(60) not null,
    cepId int not null,
    FOREIGN KEY (cepId) REFERENCES ceps(cepId),
    PRIMARY KEY (userId)
);

create table clients(
    userId int not null,
    FOREIGN KEY (userId) REFERENCES users(userId)
);

CREATE TABLE employees(
    isAdmin boolean not null,
    userId int not null,
    FOREIGN KEY (userId) REFERENCES users(userId)
);

CREATE TABLE consumes(
   consumeId int not null AUTO_INCREMENT,
   consumeDate DateTime default now(),
   consumeLt float not null,
   cepId int not null,
   PRIMARY KEY (consumeId),
   FOREIGN KEY (cepId) REFERENCES ceps(cepId)
);