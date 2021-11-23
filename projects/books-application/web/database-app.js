import db from './database.js'

console.log(await db.welcomeMessage())
await db.insertBookByTitle("NodeJS in Action")
console.log(await db.findAllBooks())
