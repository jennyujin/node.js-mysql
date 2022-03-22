"use strict";

require("dotenv").config(); 
var mysql      = require('mysql');

var connection = mysql.createConnection({
  server   : process.env.DB_SERVER,
  user     : process.env.DB_USER,
  password : process.env.DB_PSWORD,
  database : process.env.DB_DATABASE,
});
  
connection.connect();
  
connection.query('SELECT * FROM topic', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});
  
connection.end();