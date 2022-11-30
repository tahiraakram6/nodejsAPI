const express= require('express')
const app = express()
const port = 3000
var mysql = require('mysql');

app.get('/users',(req,res) => {
var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})