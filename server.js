// get dependencies
var express = require("express");
var Sequelize = require("sequelize");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());

// sequelize initialization
var sequelize = new Sequelize("postgres://username:password@localhost:5432/dbname");
// model definition
var User = sequelize.define("User", {
    username: Sequelize.STRING,
    password: Sequelize.STRING
});

var createUser = function (req, res) {
    var newUser={
        username: req.body.username,
        password:req.body.password
    }
    User.create(newUser).success(function () {
        res.send(200);
    });
};

var getUser = function (req, res) {
    User.findAll().success(function (users) {
       res.send(users);
    });
};

sequelize.sync().success(function (err) {
    app.get("/users", getUser);
    app.post("/users", createUser);
    // initializing a port
    app.listen(5000);
});


