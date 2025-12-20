console.log(x); // Output: undefined
var x = 10;

// variable   hoisting
var xy;
console.log(xy);
xy = 10;
let i;
console.log(i);
i = 10;

const j = 10;

//function hoisting

hello();
function hello() {
  console.log("we test if it is a function hoisted.");
}

// function expression hosited

// Here();
let Here = function () {
  console.log(
    "hey i am just test it is work in the hoisting a function expression"
  );
};

//  hoisting with let and const

console.log(xxx);
let xxx = 10;

console.log(xxxe);
const xxxe = 10;
