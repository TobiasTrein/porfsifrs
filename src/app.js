const express = require('express');
const mongoose = require('mongoose');

// App
const app = express();
require('dotenv').config();

// Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true
});

const db = mongoose.connection;
  
db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
        'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});

// Load models
const Professores = require('./models/prof');

// Load routes
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

const profsRoutes = require('./routes/profs-routes');
app.use('/professores', profsRoutes);


module.exports = app;
