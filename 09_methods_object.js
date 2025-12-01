// keys()
const student = { id: 101, grade: "A" };
console.log(Object.keys(student));

// values()
const student2 = { name: "Vijay", mark: 89 };
console.log(Object.values(student2));

// entries()
const stude3 = { roll: 5, section: "B" };
console.log(Object.entries(student3));

// assign()
const info1 = { city: "Madurai" };
const info2 = { country: "India" };
const merged = Object.assign(info1, info2);
console.log(merged);

//freeze()
const product = { item: "Mobile", price: 15000 };
Object.freeze(product);
product.price = 20000;
console.log(product);

// seal()
const employee = { emp: "Karan", salary: 30000 };
Object.seal(employee);
employee.salary = 35000;
employee.position = "Team Lead";
console.log(employee);

//hasOwn()
const bike = { brand: "Yamaha", model: "R15" };
console.log(Object.hasOwn(bike, "model"));

// fromEntries()
const data = [
  ["username", "ammu"],
  ["level", "pro"],
];
const obj = Object.fromEntries(data);
console.log(obj);

// Ocreate()
const base = { type: "Gaming" };
const newObj = Object.create(base);
console.log(newObj.type);
