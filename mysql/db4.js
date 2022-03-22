"use strict";

var express    =  require("express");  
var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  user: 'nodejs',
  password: '111111',
  server: '%', 
  database : 'opentutorials'  
});  
var app = express();  
  
connection.connect(function(err){  
if(!err) {  
    console.log("Database is connected ... \n\n");    
} else {  
    console.log("Error connecting database ... \n\n");    
}  
});  
  
app.get("/",function(request,response){  
connection.query('SELECT * from topic', function(err, rows, fields) {  
connection.end();  
  if (!err){  
       var data="<html><head><title>mysql test</title></head>"  
       data+="<h1>주소록</h1>"  
       data+="<table border=\"1\">"    
       data+="<tr><th>Name</th><th>Address</th></tr>"  
  
for (var i in rows){  
    data += "<tr>"  
            data += "<td>"+rows[i].name +"</td>"  
    data += "<td>"+rows[i].address+"</td>";  
    data += "</tr>"  
}  
  
data+="</table></html>"  
  
response.send(data);  
  }  
  else  
    console.log('Error while performing Query.');  
  });  
});  
  
app.listen(3000); 