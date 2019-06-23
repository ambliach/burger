//what needs to happan in the database
//when it will happen in the databse


var express = require("express")

var router = express.Router();

var burger = require("../models/burger.js")

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create(
        req.body.burger_name,
        req.body.devoured,
        function(result){
            res.json({ id: result.insertId});

        });
});


