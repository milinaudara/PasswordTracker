// get dependencies
var app = require("express")();

// handle request and response
app.get("/", function(req, res) {
    res.send({name: "Hello Wolrd"});
});

// initializing a port
app.listen( 5000);