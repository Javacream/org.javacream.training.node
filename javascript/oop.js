"use strict";
var internal_function = Symbol();
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this[internal_function]()
        Object.freeze(this);
    }
    toString() {
        return 'Point: (' + this.x + ', ' + this.y + ')';
    }
    [internal_function](){
      console.log("only intern")
    }
}
Object.freeze(Point.prototype)
module.exports={DemoClass: Point}
