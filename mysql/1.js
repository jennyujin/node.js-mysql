const express = require('express');
const app = express();

app.listen(8080, function () {
    console.log('listening on 8080')
})

// mssql 연동
var sql = require('mssql');
var config = {
    user: 'nodejs',
    password: '111111',
    server: '%',
    database: 'opentutorials',
    stream: true
}

sql.connect(config, function(err){
    if(err){
        return console.error('error : ', err);
    }
    console.log('MSSQL 연결 완료')
})