const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine","ejs");
mongoose.connect("mongodb://localhost:27017/Patients_Database",
{ useNewUrlParser: true , useUnifiedTopology: true });


const schema = {

  first_name:String,
  last_name:String,
  email_address:String,
  room_no:String

};

const Patients = mongoose.model("patients details",schema);
app.get("/",function(req,res){
 Patients.find(function(err,patients){
  if(patients){
console.log(patients);
const details = JSON.stringify(patients);
res.send(details)

  }else{
    res.write("there are no details to fetch... "); 
    console.log(err);

  }
  
 })

 app.post("/",function(req,res){
   console.log(req.body.first_name);
   console.log(req.body.last_name);
   console.log(req.body.email_address);
   console.log(req.body.room_no);
 })
 
//  res.write("<h1>The Patients Details");
//   res.send();
  
})
 

app.listen(3000,function(){

  console.log("this server is up and running");
});