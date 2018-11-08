let {Person: Person, Student: Student, Worker: Worker, Address: Address} = require("./people")

function training(){
    let p = new Person("Sawitzki", "Rainer", 183, new Address("Marienplatz", "München"))
    let s = new Student("Einstein", "Albert", 163, new Address("Geschwister-Scholl-Platz", "München"), "LMU")
    let w = new Worker("Schufter", "Hannes", 193, new Address("Königsplatz", "Stuttgart"), "Integrata")
    console.log(p.sayHello())
    console.log(s.study())
    console.log(w.work())


    demo(w.sayHello)
}
function demo(callback){
    console.log("In callback: " + callback())
}

training();