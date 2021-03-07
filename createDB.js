var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "listam",
  password: "am2o0i51u8zs4rsv"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
}); 