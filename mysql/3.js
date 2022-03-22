var sql = require('mssql');

var config = {
    user: 'nodejs',
    password: '111111',
    server: '%',
    database: 'opentutorials',
    options: {
        encrypt: true // Use this if you're on Windows Azure 
    }
}

var connection = new sql.Connection(config, function (err) {
    // ... error checks 
    
    // Query 
    
    var request = new sql.Request(connection); 
    request.query('select * from topic', function (err, recordset) {
        // ... error checks 
        
        console.dir(recordset);
    });
    
});

connection.on('error', function (err) {
	// ... error handler 
});