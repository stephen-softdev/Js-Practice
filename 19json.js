const person = {
  name: "stephen",
  age: 22,
  city: "cuddalore",
};

const jsonString = JSON.stringify(person);
console.log(jsonString);
const js='{"name":"stephen","age":22,"city":"cuddalore"}';
const string=JSON.parse(js);
console.log(string.age,string.city,string.city);
