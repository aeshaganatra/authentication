//Adding 3rd party module as below. module name is express
const { Console } = require("console");
const express = require("express");

//creating an instance of the express module;
const app = express();

//defining the port of the application
const port = 8080;

//defining routes as below/
app.get("/",function(req,res){
    res.send("Hello World")
})

app.get("/firstPage",function(req,res){
    res.send("Hello Inner World")
})

//Starting the application
app.listen(port,function(req,res){
    console.log("Server is running");
});
