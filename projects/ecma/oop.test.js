//TODO

//import {Person} from "./oop";
let Person = require("./oop")
test('a person is created', () => {
    let p = new Person(1, "Sawitzki", "Rainer", 183)
    console.log(p.sayHello())
})
