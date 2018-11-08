let classic = function (p1, p2){
    console.log("2 params: p1=" + p1 + ", p2=" + p2)
}


classic = function(p1){
    console.log("1 params: p1=" + p1)
}
classic = function(){
    console.log("no param? " + arguments[0] + ", length=" + arguments.length)
}

classic("Hello")
classic("Hello", "World")
classic()


let list = ["Hello", true, classic]

console.log(list[0]) //-> Hello
list[2]("hello world");


function demo(p){
    p("hello", "a", true, 42, 4711)
}

demo(classic)
console.log(soGehts)
console.log(soGehtsNicht)
soGehts()
soGehtsNicht()

function soGehts(){
    console.log("so gehts...")
}
let soGehtsNicht = function (){
    console.log("so gehts nicht...")
}
