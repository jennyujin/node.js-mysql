var Connection = require('tedious').Connection;  
var config = {  
    server: '%',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'nodejs', //update me
            password: '111111'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'opentutorials'  //update me
    }
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.
    console.log("Connected");  
});

connection.connect();
