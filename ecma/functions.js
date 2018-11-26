//algorithm()
function algorithm(){
   console.log("executing algorithm") 
}
//Alternative definition
//algorithm ist eine Referenz auf ein Funktionsobjekt erzeugt über das Funktionsliteral
// let algorithm = function(){
//     console.log("executing algorithm")
// }

function algorithmWithParameter(p1){

    //let p1 = arguments[0]
    console.log("one param, p1=" + p1)
}
function algorithmWithParameter(p1, p2){
    console.log("two params, p1=" + p1 + ", p2=" + p2)
}
function algorithmWithParameter(){
    console.log("no params")
    console.log(arguments.length)
    console.log(arguments[0])

}


algorithmWithParameter("Hello")
algorithmWithParameter("Hello", "World")
algorithmWithParameter()
algorithmWithParameter(42, "Hello", true, 42, false, 47.11)
