"use strict";
var basic = require ('./basics')
var oop = require ('./oop')
var demo = 4711
console.log(basic)
var list = [0]

var f1 = basic.do_closure(list, "f1")
f1()
var f2 = basic.do_closure(list, "f2")

f1()
f2()
f1()

console.log(basic.hugo)
var p = new oop.DemoClass(1,2);
console.log(p.toString())
p.say_hello = function(){
  console.log("Hello");
}

p.say_hello();
