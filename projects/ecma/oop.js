'use strict'

module.exports = class Person {
    constructor(id, lastname, firstname, height){
        this.id = id
        this.lastname = lastname
        this.firstname = firstname
        this.height = height
    }

    //These: Das folgende ist eine Methode der Klasse Person
    sayHello(){
        return  ` 'Hello, my name is ${this.lastname}` 
    }
}

//extends funktioniert wie erwartet
//interfaces gibt es nicht