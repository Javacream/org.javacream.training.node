class Address{
    constructor(city, street){
        this.city = city, this.street = street
    }
}

class Person{
    constructor(lastname, firstname, height, address){
        this.lastname = lastname
        this.firstname = firstname
        this.height = height
        this.address = address
        this.sayHelloArrow = () => {
            return "Hello, my name is " + this.lastname
        }
    }
    sayHello(){
        return "Hello, my name is " + this.lastname
    }

}

class Student extends Person{
    constructor(lastname, firstname, height, address, university){
        super(lastname, firstname, height, address)
        this.university = university
    }
    study(){
        return this.sayHello() + ", studying at " + this.university
    }
}

class Worker extends Person{
    constructor(lastname, firstname, height, address, company){
        super(lastname, firstname, height, address)
        this.company = company
    }
    work(){
        return this.sayHello() + ", working at " + this.company
    }
}

exports.Person = Person
exports.Student = Student
exports.Address = Address
exports.Worker = Worker
