//what needs to happan in the database
//when it will happen in the databse


var express = require("express")

var router = express.Router();

var burger = require("../models/burger")

router.get("/", function(req, res, next){
    burger.selectAll((result)=>{
    
        res.render("index", {burgers: result, style: "burger_style"});
    });
});

router.post("/",(req, res, next)=>{
    burger.insertOne(req.body.burger_name, ()=>{
      res.redirect("/")
    });
    
        });
router.put("/:id",(req, res,next)=>{
var condition = req.params.id
 
    burger.updateOne(id, ()=>{
        res.redirect("/")
    });
    
    });


module.exports = router;
