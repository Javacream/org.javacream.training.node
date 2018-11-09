let mysql = require('mysql2/promise');


  async function training(){
    try{
      let connection = await mysql.createConnection({
        host : '127.0.0.1',
        user : 'root',
        password : 'unilog',
        database : 'nodedb'
      });
      await connection.execute("drop table if exists books")
      await connection.execute("create table books (isbn varchar(20), title varchar(1024), pages int, price decimal(5,2), primary key (isbn))")
      for (let i = 1; i < 10; i++){
        await connection.execute("insert into books values(?, ?, ?, ?)", ["ISBN" + i, "Title" + i, i*100, 1.99*i])
      }
      await connection.end()
    }
    catch(err){
      console.log(err)
    }  
  }

  training()