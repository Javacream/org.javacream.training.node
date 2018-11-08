let mysql = require('mysql2');

let connection = mysql.createConnection({
	host : '127.0.0.1',
	user : 'root',
	password : 'unilog',
	database : 'nodedb'
});
connection.query(
    'SELECT * FROM messages' ,
    function(err, results, fields) {
      if (err) {
        console.log(err)
      }
      else{
        console.log(results); // results contains rows returned by server
        results.filter((e) => e.message.startsWith("D")).forEach((row) => console.log(row.message))
    }
    connection.end()
    }
  );