const sne = [1, 2, 3, 4, 5];
const [number1, number2] = sne;
console.log(number2);

const data = {
  person: "stephen",
  age: "21",
};

const { person, age } = data;
console.log(age, person);

res = [...sne, 6, 7, 8, 9];
console.log(res);

const fun = (...pa) => {
  var total = 0;
  pa.forEach((result) => (total += result));
  return total;
};
console.log(fun(1, 2, 3, 4, 5));
