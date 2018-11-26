function doSomething(){
    let insideDoSomething = "Hello" //Function Scoped Variable
    let cache = []
    let notUsed = "World"
    console.log("entering doSomething, insideDoSomething=" + insideDoSomething)
    function inside(m){
        cache.push(m)
        console.log("entering inside, insideDoSomething=" + insideDoSomething +", cache=" + cache)
    }
    //inside()
    return inside

}

let result = doSomething()

let result2 = doSomething()
result2("Em")
result("Hu")
result("Go")
result2("Il")
