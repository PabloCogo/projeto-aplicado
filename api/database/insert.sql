INSERT INTO cities(cityName) VALUES ("Chapecó");
INSERT INTO districts(districtName,cityId) VALUES("Engenho Braun",1);
INSERT INTO ceps(cep,districtId) VALUES("89809360",1);

INSERT INTO users(userName,userEmail,userPassword,cepId) VALUES ("Admin","Admin@gmail.com","$2b$10$A3CsD72Zrqo1zamciBxwD.MlkKAViTbwemcelkLlrERXf1hJmjcPi",1);

INSERT INTO employees(isAdmin,userId) VALUES (true,1);