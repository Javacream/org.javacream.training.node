//functional
/*
function demo(p){
    console.log('one param')
}

function demo(){
    console.log("no param")
}

function demo(p1, p2){
    console.log(arguments[0])
    console.log("two params")
}
*/

let demo = function (p){
    console.log('one param')
}

demo = function (p1, p2){
    console.log(arguments[0])
    console.log("two params")
}

//Best Practice: Bevorzugen Sie die Arrow-Syntax
//Diese Syntax wird nicht von allen Browser nativ unterstützt -> später
demo = () => {
    console.log("no param")
}


demo(42)
demo(1,2)
demo()
demo(1,2,3,4)