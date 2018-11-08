let demo = function (){
    console.log("starting demo... ")
    let names = ["Hugo", "Emil", "Fritz"]
    console.log(names[0])
    demo2(names)
    console.log(names[0])
    let internDemo2 = function(list){
        console.log("starting internDemo2... ")
        console.log("from param: " + list[0] + ", from outer: " + names[0])
    }
    
    return internDemo2
}

let demo2 = function(list){
    console.log(list[0])
    list = []
    list[0] = "Fridolin"
    console.log(list[0])

}
let x = demo()
x(["A"])
//console.log(demo)

