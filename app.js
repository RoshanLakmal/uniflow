var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("landing");
});

app.get("/questions", function(req,res){
    var questions = [
        {qId: "1", qDescription: "question1"},
        {qId: "2", qDescription: "question2"},
        {qId: "3", qDescription: "question3"}
        ]
        
        res.render("questions", {questions: questions});
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("UniFlow server has started!"); 
});