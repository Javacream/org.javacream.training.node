let consolePrinter = (element) => {console.log(element)}
let filterElementsStartingWithA = (element) => {return element.startsWith("A")}
let lengthTransformer = (element) => {return element.length}

exports.consolePrinter = consolePrinter
exports.filterElementsStartingWithA = filterElementsStartingWithA
exports.lengthTransformer = lengthTransformer
