const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('express-flash');
const logger = require('morgan');
const connectDB = require('./config/database.js')
const mainRoutes = require('./routes/main')
const todoRoutes = require('./routes/todos')

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs', {name: 'Din'})
});

app.listen(3000)
