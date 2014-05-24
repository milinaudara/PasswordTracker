// get dependencies
var express = require("express");
var Sequelize = require("sequelize");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());

// sequelize initialization
var sequelize = new Sequelize("postgres://username:password@localhost:5432/dbname");
var userService= require("./userService")(sequelize);

//sync the model with the database
sequelize.sync().success(function (err) {
    app.get("/users", userService.get);
    app.post("/users", userService.create);
    app.listen(5000);
});

