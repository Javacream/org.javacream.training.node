'use strict'
class Address{
    constructor(city, street){
        this.city = city, this.street = street
        Object.freeze(this)
    }
}
Object.freeze(Address.prototype)

class Person{
    constructor(id, lastname, firstname, height, address){
        this.id = id
        this.lastname = lastname
        this.firstname = firstname
        this.height = height
        this.address = address
        this.sayHelloArrow = () => {
            return "Hello, my name is " + this.lastname
        }
        //Object.preventExtensions(this)
    }
    sayHello(){
        return "Hello, my name is " + this.lastname
    }

}
class Student extends Person{
    constructor(id, lastname, firstname, height, address, university){
        super(id, lastname, firstname, height, address)
        this.university = university
    }
    study(){
        return this.sayHello() + ", studying at " + this.university
    }
}
class Worker extends Person{
    constructor(id, lastname, firstname, height, address, company){
        super(id, lastname, firstname, height, address)
        this.company = company
    }
    work(){
        return this.sayHello() + ", working at " + this.company
    }
}


class PeopleModel{
    
    constructor(){
        this.people = new Map()
        Object.freeze(this)
        
    }
    createPerson(lastname, firstname, height, address){
        PeopleModel.counter++
        let p = new Person(PeopleModel.counter, ...arguments)
        this.people.set(p.id, p)
        Object.preventExtensions(p)
        return p
    }
    createStudent(lastname, firstname, height, address, university){
        PeopleModel.counter++
        let p = new Student(PeopleModel.counter, ...arguments)
        this.people.set(p.id, p)
        Object.preventExtensions(p)
        return p
    }
    createWorker(lastname, firstname, height, address, company){
        PeopleModel.counter++
        let p = new Worker(PeopleModel.counter, ...arguments)
        this.people.set(p.id, p)
        Object.preventExtensions(p)
        return p
    }

    findById(id){
        return this.people.get(id)
    }

    update(person){
        this.people.set(person.id, person)
    }

    deleteById(id){
        this.people.delete(id)
    }

}
Object.freeze(Worker.prototype)
Object.freeze(Student.prototype)
Object.freeze(Person.prototype)
Object.freeze(PeopleModel.prototype)

PeopleModel.counter = 0
exports.Address = Address
exports.model = new PeopleModel()
