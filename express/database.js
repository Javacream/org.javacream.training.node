let mysql = require('mysql2/promise');


async function welcomeMessage(){
  try{
    let connection = await mysql.createConnection({
      host : '127.0.0.1',
      user : 'root',
      password : 'unilog',
      database : 'nodedb'
    });
    let [result, fields] = await connection.query(
        "SELECT entry FROM config where id = 'welcome-message'")
    await connection.end()
    return result[0].entry
  }
  catch(err){
    console.log(err)
  }  
}
async function findAllBooks(){
  try{
    let connection = await mysql.createConnection({
      host : '127.0.0.1',
      user : 'root',
      password : 'unilog',
      database : 'nodedb'
    });
    let [result, fields] = await connection.query(
        "SELECT * FROM books")
    await connection.end()
    return result
  }
  catch(err){
    console.log(err)
  }  
}
async function findBookByIsbn(isbn){
  try{
    let connection = await mysql.createConnection({
      host : '127.0.0.1',
      user : 'root',
      password : 'unilog',
      database : 'nodedb'
    });
    let [result, fields] = await connection.query(
        `SELECT * FROM books where isbn='${isbn}'`)
    await connection.end()
    return result
  }
  catch(err){
    console.log(err)
  }  
}


exports.retrieveWelcomeMessage = welcomeMessage
exports.findAllBooks = findAllBooks
exports.findBookByIsbn = findBookByIsbn