let text = "1. Hey i am using a global scope for print the statement. !";

function sms() {
  console.log(text);
}

sms();

function sms2() {
  let text2 = "2. Hey i am using a local scope for print the statement. !";

  console.log(text2);
}

sms2();
// console.log(text2); // if you uncomment this line it make the error is the text2 is not define.

function sms3() {
  let text3 = "3. Hey i am using a function scope for print the statement. !";

  console.log(text3);
}

sms3();
// console.log(text3);// if you uncomment this line it make the error is the text2 is not define.

{
  let text5 = "5. Hey i am using a block scope for print the statement. !";

  console.log(text5);
}
// console.log(text5);
