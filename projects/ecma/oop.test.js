'use strict'

function callbackFunction(cb){
    cb()
}
let Person = require("./oop")
test('a person is created', () => {
    let p = new Person(1, "Sawitzki", "Rainer", 183)
    console.log(p.sayHello())
    p.gender = 'm'
    console.log(p.gender)


})

test('callbackFunction', () => {
    callbackFunction(() => {
        console.log("Hello!")
    })
    let p = new Person(1, "Sawitzki", "Rainer", 183)
    callbackFunction(p.sayHello)
})


