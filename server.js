// get dependencies
var app = require('express')();
var Sequelize = require('sequelize');

// sequelize initialization
var sequelize = new Sequelize("postgres://username:password@localhost:5432/dbname");

// model definition
var User = sequelize.define("User", {
    username: Sequelize.STRING,
    password: Sequelize.STRING
});

//sync the model with the database
sequelize.sync({ force: true }).success(function(err) {
    // insert new user
    User.create({
        username: "john",
        password: "a_secret"
    }).success(function(user) {
        // you can now access the newly created user via the variable user
        console.log(user);
    });
});

// initializing a port
app.listen(5000);