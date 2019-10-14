// var a = 92;
// Variables declared with *let* are not part of the global object

let a = 92;

var obj = {
  a: 1,
  b: 2,
  c: 3
};

function test() {
  console.log(this.a);
}

test();

obj.test = test;
obj.test();
