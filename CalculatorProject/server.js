const express = require('express');
const bodyParser = require('body-Parser');
const { response } = require( 'express' );
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3000,function(){
  
  console.log('The server has started');
});

app.get('/',function(request,response){

  console.log(__dirname);
  response.sendFile(__dirname + "/index.html");
});

app.get('/bmi',function(request,response){
  response.sendFile(__dirname + "/BMI.html");
});

app.post("/bmi",function(request,response){
  var height = Number(request.body.height);
  var heightsq = height * height;
  var weight = Number(request.body.mass);
  var BMI = weight/heightsq;
  response.send("The BMI = " + BMI);

})




app.post('/',function(request,response){
  
  var number1 = Number(request.body.num1)
  var number2 = Number(request.body.num2);

  var result1 = number1 + number2;


  console.log(request.body.num1 + request.body.num2);
  response.send("The addition of this two number is  = " + result1);
  
});