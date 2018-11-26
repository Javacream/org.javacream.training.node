/*
Einführung der Typisierung in ECMA
*/

let message = "Hello" //message ist eine Referenz auf ein Objekt vom Typ String
console.log(message + 1)
message = 42 //message ist jetzt eine Referenz auf ein Objekt vom Typ Number
console.log(message + 1)

let state = true //Boolscher Ausdruck, true | false
let realNumber = 4.2
console.log(realNumber + 1)

let list = ["A", "B", "C"] //List-Literal, ein Array

let list2 = list //Zuweisung einer Kopie des Wertes der Referenz

list2[3] = "D"
console.log(list[3])

let object = {
    isbn: "ISBN1",
    title: "Title1",
    price:  19.99, 
    info: function(){
        return "Book: isbn=" + this.isbn
    }
}

//object als Assoziatives Array, Dictionary, Map
console.log(object["isbn"])
object["pages"] = 200
console.log(object["pages"])
console.log(object["info"]())
//x kann auch als Objekt aufgefasst werden
//Ein Objekt besteht aus Eigenschaften
console.log(object.title)
object.keywords = ["sports", "politics"]
console.log(object.keywords[0])
console.log(object.info())

