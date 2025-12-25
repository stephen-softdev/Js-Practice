const date = new Date();
console.log(date);

// custom date time formate

const currentdate = new Date();
const date1 = currentdate.getDate();
const year = currentdate.getFullYear();
const month = currentdate.getMonth() + 1;
const monthname = currentdate.toLocaleDateString("default", { month: "long" });
const hour = currentdate.getHours();
const minute = currentdate.getMinutes();
const second = currentdate.getMinutes();
let apm = "";
console.log(" Current date:", date1, "-", month, "-", year);
console.log("current time:", hour, ":", minute, ":", second);

if (hour > 12) {
  apm = "PM";
  console.log("current time:", hour - 12, ":", minute, ":", second, " ", apm);
} else {
  apm = "AM";
  console.log(" Current date:", date1, "-", monthname, "-", year, " ", apm);
}
