let person = {
    name: "Sawitzki",
    sayHello: () => {
        console.log("Hello, my name is " + this.name)
    }
}

person.sayHello()

function demo(callback){
    callback()
}
demo(person.sayHello)