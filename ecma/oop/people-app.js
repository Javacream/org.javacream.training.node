'use strict'

let {model: model, Address: Address} = require("./people")

function training(){
    model.createPerson("Sawitzki", "Rainer", 183, new Address("Marienplatz", "München"))
    model.createStudent("Einstein", "Albert", 163, new Address("Geschwister-Scholl-Platz", "München"), "LMU")
    model.createWorker("Schufter", "Hannes", 193, new Address("Königsplatz", "Stuttgart"), "Integrata")
    
    let p = model.findById(1)
    console.log(p)
    //demo(p.sayHello)
    demo(p.sayHelloArrow)
}
function demo(callback){
    console.log("In callback: " + callback())
}

training();