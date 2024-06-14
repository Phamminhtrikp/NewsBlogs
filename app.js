const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');


const route = require('./src/routes');
const db = require('./src/config/db');

const port = 3000;

const app = express();

const SortMiddleware = require('./src/app/middlewares/SortMiddleware');

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// Connect to db
db.connect();

app.use(bodyParser.urlencoded({extended: true}));

// Custom middlewares 
app.use(SortMiddleware);

// Static files
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'resources', 'views'));


// Routes
route(app);

// Helpers function 
app.locals.Helpers = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {


        return ` <a href="?_sort&column=name&type=desc">
                    <i class="fa-solid fa-sort"></i>
        </a>`;
    }
}

app.listen(port, () => {
    console.log(`App running at port http://localhost:${port}`);
});