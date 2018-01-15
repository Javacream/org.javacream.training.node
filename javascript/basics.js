var demo = 42
var do_closure = function(list, param){
  list[0] = list[0] + 1;
  return function(){
    console.log('list[0]=' + list[0] + ", param=" + param)
  }
}
module.exports = { demo:demo, do_closure:do_closure}
