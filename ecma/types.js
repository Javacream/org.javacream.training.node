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

let x = {
    isbn: "ISBN1",
    title: "Title1",
    price:  19.99
}

//x als Assoziatives Array, Dictionary, Map
console.log(x["isbn"])
x["pages"] = 200
console.log(x["pages"])
//x kann auch als Objekt aufgefasst werden
//Ein Objekt besteht aus Eigenschaften
console.log(x.title)
x.keywords = ["sports", "politics"]
console.log(x.keywords[0])


