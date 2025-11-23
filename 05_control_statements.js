// entry control check loop

for (let j = 1; j < 100; j++) {
  console.log(j);
}

for (let i = 1; i <= 6; i++) {
  console.log("*".repeat(i));
}

let k = 1;
while (k < 10) {
  console.log(k);
  k++;
}
let z = 1;
do {
  console.log("this is do block");
  z++;
} while (z < 10);

const car = {
  brand: "BMW",
  model: "X5",
  year: 2022,
  color: "Black",
};

for (let key in car) {
  console.log(key + ": " + car[key]);
}
const fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let item of fruits) {
  console.log(item);
}
