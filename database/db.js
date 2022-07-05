
var mysql = require('mysql')

var con = mysql.createConnection({  
    host: "rpshortlets.ch3qb8x9xzzj.us-east-2.rds.amazonaws.com",  
    user: "admin",  
    password: "Kolapoishola123$",
    database: "real_properties",
    multipleStatements: true
  });   

  con.connect(function(err) {
    if (err) throw err;
});

module.exports = con;



