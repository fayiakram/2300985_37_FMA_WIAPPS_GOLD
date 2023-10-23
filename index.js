const express = require("express");
const router = require("./routers/router");
const path = require("path");
const morgan = require("morgan");
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');
const passport = require('./libs/passport');



app.use(morgan('dev'));




app.use(express.static(path.join(__dirname, "public")))

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));



// proses inisasi middleware atuh
app.use(cookieParser());
app.use(flash());
app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
// end proses inisiasi middleware.

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(router);

app.listen(port, () => {
    console.log(`Server Listen on Port ${port}`);
});