const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const { request } = require( "express" );
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
app.get("/patients",function(req,res){
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
 //  res.write("<h1>The Patients Details");
//   res.send();
  
})

 app.post("/patients", function(req,res){
  const value_new = Patients({
   first_name: String(req.body.first_name),
   last_name: String(req.body.last_name),
   email_address: String(req.body.email_address),
   room_no: String(req.body.room_no)
  });
  value_new.save();
  
   console.log(req.body.first_name);
   console.log(req.body.last_name);
   console.log(req.body.email_address);
   console.log(req.body.room_no);
})

app.delete("/patients",function(req,res){
  Patients.deleteMany(function(err){
    if(!err){
      console.log("all the details has been deleted"); 
    }
  })

})

app.get("/patients/:patientsfirst_name",function(req,res){
  Patients.findOne({first_name: req.params.patientsfirst_name},function(err,onepatient){
    if(!err){console.log(onepatient);
      const onegetpatients = JSON.stringify(onepatient);
      res.send(onegetpatients);
    }
    else{
      console.log(err);
    }
  })

});
 

app.listen(3000,function(){

  console.log("this server is up and running");
});  