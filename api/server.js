require('module-alias/register');
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const session = require('express-session');

const userController = require('@controller/userController');
const clientController = require('@controller/clientController');
const employeeController = require('@controller/employeeController');
const addressController = require('@controller/addressController');
const consumeController = require('@controller/consumeController');

const PORT = process.env.PORT_SERVER || 3001;
const URL_CLIENT = [process.env.ORIGIN_CLIENT, "http://localhost:3000"];

app.use(express.json());

app.use(
    cors({
        origin: [URL_CLIENT],
        methods: ["GET", "POST","DELETE","PUT"],
        credentials: true,
    })
);
app.use(
    session({
        key: "userId",
        secret: "economicWater",
        resave: true,
        saveUninitialized: true,
        cookie:{
            maxAge: 1000 * 60 * 60 * 24,
            secure: false
        }
    })
);

app.use('/user', userController);
app.use('/client', clientController);
app.use('/employee', employeeController);
app.use('/address', addressController);
app.use('/consume',consumeController);

app.listen(PORT, err => {
    if (err) {
        return console.log(err);
    }
    console.log(`running on port ${PORT}`);
});

