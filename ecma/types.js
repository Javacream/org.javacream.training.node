let message = "Hello"
console.log(message + 1)
message = 42
console.log(message + 1)

let names = ["Hugo", "Emil", "Fritz"]

let personObject = {

    name: "Sawitzki",
    height: 183,
    sayHello: function(){
        return "Name: " + this.name + ", height: " + this.height
    }
}

console.log(personObject.sayHello())