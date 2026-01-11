// 1. try catch
let i = 0;
try {
  if (10 / i === 10) {
    console.log("i is grater than 0");
  }
  console.log("try part executed");
} catch (error) {
  console.log("catch error is executed");
}

// 2. error object

try {
  let x = 0 / 10;
  console.log(i);
} catch (error) {
  console.error("an error occurred:", error.message);
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log("Result:", result);
} catch (error) {
  console.log("An error occurred:", error.message);
}
