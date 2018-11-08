let mysql = require('mysql2/promise');


  async function training(){
    try{
      let connection = await mysql.createConnection({
        host : '127.0.0.1',
        user : 'root',
        password : 'unilog',
        database : 'nodedb'
      });
      let [result, fields] = await connection.query(
          'SELECT * FROM messages')
      console.log(result); // results contains rows returned by server
      result.filter((e) => e.message.startsWith("D")).forEach((row) => console.log(row.message))
      await connection.end()
    }
    catch(err){
      console.log(err)
    }  
  }

  training()