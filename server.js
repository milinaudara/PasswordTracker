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
    }).success(function() {
        User.find({
            where: { username: 'john' }
        }).success(function(john) {
            console.log('Hello ' + john.username + '!');
            console.log('All attributes of john:', john.values);
        });
    });
});

// initializing a port
app.listen(5000);