const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const route = require('./src/routes');
const db = require('./src/config/db');

const port = 3000;

const app = express();

// Connect to db
db.connect();

app.use(bodyParser.urlencoded({extended: true}));

// Static files
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'resources', 'views'));


// Routes

route(app);



app.listen(port, () => {
    console.log(`App running at port http://localhost:${port}`);
});