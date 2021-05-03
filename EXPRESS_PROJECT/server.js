const express = require('express');
const app = express();
app.listen(3000,function(){

   console.log("the server has started");
});

app.get("/",function(request,response){

  response.send("<h1>Hi welcome to my website !!! :)</h1>");

});  

  app.get("/about",function(request,response){

    response.send("<h2>my email id is binitasubedi@gmail.com</h2>");
});
   
   app.get("/Binita",function(request,response){

    response.send("<h1>Hello...Welcome to my homepage\n----Learning Express!!</h2>")
});





 