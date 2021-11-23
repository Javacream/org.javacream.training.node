import db from './database.js'

console.log(await db.welcomeMessage())
console.log(await db.findAllBooks())
