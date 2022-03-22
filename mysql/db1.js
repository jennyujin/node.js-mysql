"use strict";

const mysql = require("mysql");

var connection = mysql.createConnection({
    user: 'nodejs',
    password: '111111',
    server: '%',
    database: 'opentutorials',
  });
    
  connection.connect();
    
  connection.query('SELECT * FROM topic', function (error, results, fields) {
      if (error) {
          console.log(error);
      }
      console.log(results);
  });
    
  connection.end();
