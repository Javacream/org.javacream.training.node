//let mysql = require('mysql2/promise');
import mysql from 'mysql2/promise'
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
        "SELECT value FROM CONFIG where entry = 'welcome-message'")
    await connection.end()
    return result
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
    return result[0]
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
async function insertBookByTitle(title){
  try{
    let connection = await mysql.createConnection(connectionConfig);
    let isbn = "ISBN" + Math.floor(Math.random() * 1000000);
    await connection.query(
      `insert into BOOKS (isbn, title) values('${isbn}', '${title}')`)
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

let db = {
    deleteBookByIsbn, findAllBooks, findBookByIsbn, updateBookByIsbn, insertBookByTitle, welcomeMessage

}
export default db