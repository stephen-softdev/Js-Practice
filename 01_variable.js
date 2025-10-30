// var data type is declared as a function scope
// var declard as a global
var s = 10000;
function vartest() {
  console.log("var type is check it is a global scope or not....");
  console.log(s);
}
vartest();
function vartest1() {
  console.log("var type is declared in a function scope....");
  var a = 10;
  console.log(a);
}

// let data type is declared
function lettest() {
  let i = 9;
  console.log("let type is declared in a function scope....");

  console.log(i);
}
lettest();
// let data type is  redeclared



console.log("let checking is  capable for a redeclaration");
let a = 10;
a = 20;
a = 30;
console.log(a);

