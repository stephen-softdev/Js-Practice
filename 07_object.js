const car = {
  brand: "BMW",
  model: "X5",
  year: 2022,
  color: "Black",
};

for (let key in car) {
  console.log(key + ": " + car[key]);
}
