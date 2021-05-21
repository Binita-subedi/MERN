const express = require('express');
const https = require('https');
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:true})); 
const apikey ="0fb71efa3fd11fe4bb12a838666c5520";
const url ="https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid="+apikey+"&units=metric";

app.listen(3000,function(){
  console.log('The server has started at port 3000');
});

app.get("/",function(request,response){
  response.sendFile(__dirname + "/index.html");
});

app.post("/",function(request,response)
{
  var cityName = request.body.cityname;
  const url ="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apikey+"&units=metric";
  https.get(url,function(res){
  res.on("data",function(data){
    
    
  const apikey ="0fb71efa3fd11fe4bb12a838666c5520";
  var weatherinfo=JSON.parse(data);
  var weather = weatherinfo.weather[0].main;
  var temperature = weatherinfo.main.temp;
  var place = weatherinfo.name;
  var icon = weatherinfo.weather[0].icon;
  var imgURL = "http://openweathermap.org/img/wn/"+ icon+ "@2x.png"
  response.write("<h1>The weather in "+ place +"= "+ weather);
  response.write("<br>The temperature = " + temperature + " degree Celcius");
  response.write("<img src"+imgURL+">");
  response.send();
  


});
});

  
});


