const mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'sqlcrud'
  });
   
  connection.connect((err)=>{
    if(err){
        console.log("mysql not connected error is ", err);
    }
    else{
        console.log("mysql is connected");
    }
  });
   
   
 // connection.end();
  module.exports = connection;
