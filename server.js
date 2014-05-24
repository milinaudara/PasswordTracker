// get dependencies
var app = require('express')();
var Sequelize = require('sequelize');

// sequelize initialization
var sequelize = new Sequelize("postgres://username:password@localhost:5432/dbname");

// check database connection
sequelize.authenticate().complete(function(err) {
    if (err) {
      console.log('Unable to connect to the database:', err);
    } else {
      console.log('Connection has been established successfully.');
    }
});

// initializing a port
app.listen(5000);