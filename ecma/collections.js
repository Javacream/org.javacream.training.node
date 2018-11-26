let list = ["B12", "Zwonimir", "Abc", "C"]

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
let sortedList = list.sort(sorter)
let transformedList = sortedList.map(transformer)
transformedList.forEach(iterator)