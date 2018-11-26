let strings = ["B12", "Zwonimir", "Abc", "C"]

//Jegliche weitere Datenverarbeitung von Collections 
//benötigt weder eine Schleife noch eine Abfrage noch irgendwelche temporäre Zwischenergebnisse

//Collections-API:
// - filter : if else
// - map    : transform
// - sort   : sortierung
// - reduce //terminal
// - forEach //terminal
//console.log(list)
const sorter = function(e1, e2){ return e2.localeCompare(e1)}
const iterator = function(element, index) {console.log(element)}
const transformer = function(e) { return e.length}
let sortedList = strings.sort(sorter)
let transformedList = sortedList.map(transformer)
//transformedList.forEach(iterator)


//Collection Types: Set, Array (=List), Map (oder Dictionary)


let set = new Set()
let list = new Array()
let map = new Map()

set.add("Hugo")
set.add("Emil")
set.add("Hugo")

list.push("Hugo")
list.push("Emil")
list.push("Hugo")

map.set("Hugo", "Hug")
map.set("Emil", "Emil")
map.set("Hugo", "Hugo")

console.log(set.size)
console.log(list.length)
console.log(map.size)