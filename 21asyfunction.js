// set Time out
console.log("setTimeout: will run once after 1 second");
setTimeout(() => console.log("Timeout executed"), 1000);

console.log("setInterval: will run every 2 seconds. Cancel after 6 seconds.");
const intervalId = setInterval(() => console.log("Interval tick"), 2000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval cleared");
}, 6000);

//call function
function getdata(data) {
  const age = 10;
  inputdata(age);
}
function inputdata(age) {
  console.log(age);
}

getdata(inputdata);

function getData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data1 = "This is the data";
      resolve(data1);
    }, 2000);
  });
}

getData1()
  .then((data1) => {
    console.log("Received data:", data1);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
