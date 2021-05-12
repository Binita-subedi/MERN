const express = require('express');
const https = require('https');
const app = express();
const apikey ="0fb71efa3fd11fe4bb12a838666c5520";
const url ="https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid="+apikey+"&units=metric";

app.listen(3000,function(){
  console.log('The server has started at port 3000');
});

app.get("/",function(request,response){
  https.get(url,function(res){
  res.on("data",function(data){
    var weatherinfo=JSON.parse(data);
    var weather = weatherinfo.weather[0].main;
    var temperature = weatherinfo.main.temp;
    var icon = weatherinfo.weather[0].icon;
    var imgURL = "http://openweathermap.org/img/wn/"+ icon+ "@2x.png"
    response.write("<h1>The weather in kathmandu  = "+ weather);
    response.write("<br>The temperature in Kathmandu = " + temperature + " degree Celcius");
    response.write("<img src"+imgURL+">");
    response.send();
  


});
});



});

