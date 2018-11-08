let names = ["Aaa", "Azzzz", "AZ", "F1"]
let postalCodes = new Map()
let set = new Set()
postalCodes["München"] = 81373

//for (let i = 0; i < names.length; i++){
//    console.log(names[i])
//}
let sorter = (e1, e2) => {return e2.length - e1.length}
let consolePrinter = (element) => {console.log(element)}
let filterElementsStartingWithA = (element) => {return element.startsWith("A")}
let lengthTransformer = (element) => {return element.length}
names.filter(filterElementsStartingWithA).sort(sorter).map(lengthTransformer).forEach(consolePrinter)
console.log(postalCodes["München"])