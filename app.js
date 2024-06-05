const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const route = require('./src/routes');

const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/resources/views'));


// Routes

route(app);



app.listen(port, () => {
    console.log(`App running at port http://localhost:${port}`);
});