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

let db = {
    welcomeMessage

}
export default db