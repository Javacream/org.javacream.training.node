var basic = require ('./basics')
var demo = 4711
console.log(basic)
list = [0]

var f1 = basic.do_closure(list, "f1")
f1()
var f2 = basic.do_closure(list, "f2")

f1()
f2()
f1()

console.log(demo)
