const fs = require("fs");
fs.readFile("./hello.txt","utf8",function(error,data){
  if(error) throw error;

  console.log(data);
});