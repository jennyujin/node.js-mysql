var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var config = {
    server: '%',
    options: { encrypt: false, enableArithAbort: true, database: 'opentutorials' },
    authentication:{
        type:"default",
        options:{
            userName:"nodejs",
            password:"111111"
        }
    }
};

var sqlConn = new Connection(config);
sqlConn.on('connect', function(err) {
    console.log("Connected");
    executeStatement();
});

function executeStatement() {
    request = new Request("select Convert(char(10),getdate(),121) as TargetDate, newid()", function(err, rowCount) {
        if (err) {
            console.log(err);
        } else {
            console.log(rowCount + ' rows');
        }
    });

    request.on('row', function(columns) {
        columns.forEach(function(column) {
            console.log(column.value);
        });
    });

    sqlConn.execSql(request);
}