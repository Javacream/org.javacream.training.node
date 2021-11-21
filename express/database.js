let mysql = require('mysql2/promise');
let connectionConfig = {
  host : 'h2908727.stratoserver.net',
  port: 3406,
  user : 'training',
  password : 'training123!',
  database : 'training'
}

async function welcomeMessage(){
  try{
    let connection = await mysql.createConnection(connectionConfig);
    let [result, fields] = await connection.query(
        "SELECT entry FROM CONFIG where id = 'welcome-message'")
    await connection.end()
    return result[0].entry
  }
  catch(err){
    console.log(err)
  }  
}
async function findAllBooks(){
  try{
    let connection = await mysql.createConnection(connectionConfig);
    let [result, fields] = await connection.query(
        "SELECT * FROM BOOKS")
    await connection.end()
    return result
  }
  catch(err){
    console.log(err)
  }  
}
async function findBookByIsbn(isbn){
  try{
    let connection = await mysql.createConnection(connectionConfig);
    let [result, fields] = await connection.query(
        `SELECT * FROM BOOKS where isbn='${isbn}'`)
    await connection.end()
    return result
  }
  catch(err){
    console.log(err)
  }  
}
async function updateBookByIsbn(isbn, bookData){
  try{
    let connection = await mysql.createConnection(connectionConfig);
    await connection.query(
      `update BOOKS set price=${bookData.price} where isbn='${isbn}'`)
  await connection.end()
  }
  catch(err){
    console.log(err)
  }  
}
async function insertBookByIsbn(isbn, bookData){
  try{
    let connection = await mysql.createConnection(connectionConfig);
    await connection.query(
      `insert into BOOKS (isbn, title, pages, price) values('${isbn}', '${bookData.title}', ${bookData.pages}, ${bookData.price})`)
  await connection.end()
  }
  catch(err){
    console.log(err)
  }  
}


async function deleteBookByIsbn(isbn){
  try{
    let connection = await mysql.createConnection(connectionConfig);
    await connection.query(
        `delete FROM BOOKS where isbn='${isbn}'`)
    await connection.end()
  }
  catch(err){
    console.log(err)
  }  
}


exports.retrieveWelcomeMessage = welcomeMessage
exports.findAllBooks = findAllBooks
exports.findBookByIsbn = findBookByIsbn
exports.deleteBookByIsbn = deleteBookByIsbn
exports.updateBookByIsbn = updateBookByIsbn
exports.insertBookByIsbn = insertBookByIsbn