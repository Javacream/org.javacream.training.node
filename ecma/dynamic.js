'use strict'
function dynamicObject(){
    let o = {name: "Sawitzki", sayHello: function() {console.log(this.name)}}
    o.sayHello()

    o.height = 183
    console.log(o.height)
    Object.freeze(o)
    try {
        o.weight = 77
    } catch (error) {
        console.log("OK, weight not set") 
        console.log(o.weight)       
    }
    

}
function extendMap(){
    let map1 = new Map()
    map1.set("message", "Hello")
    map1.set("severity", 10)

    let map2 = new Map()
    map2.set("message", "Goodbye")
    map2.set("severity", 1)
    map2.set("done", true)

    Map.prototype.toCSV = function(){
        let result = ""
        let entries = [...this.entries()]
        entries.map((entry) => result = result + entry[0] + "=" + entry[1] + ",")
        return result
    }

    console.log(map1.toCSV())
    console.log(map2.toCSV())


}
dynamicObject()
extendMap()