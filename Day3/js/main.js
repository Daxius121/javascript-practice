function reverseUserName() {
  let userName = prompt("Username");
  let reverseName = userName.split("").reverse().join("");
  console.log(reverseName);
  return reverseName;
}
reverseUserName();

function addAndAlert() {
  let num1 = parseInt(prompt("Number", "10"));
  let num2 = parseInt(prompt("Number", "10"));
  let numTotal = num1 + num2;
  alert(numTotal);
}
addAndAlert();

function firstAndLastName() {
  let firstName = prompt("First Name?", "Kenny");
  let lastName = prompt("Last Name?", "Marquez");
  let userBirthday = prompt("What is your birthday?");
  confirm(`Are you sure your birthday is ${userBirthday}?`);
  console.log(firstName);
  alert(lastName);
  alert(userBirthday);
}
firstAndLastName();
