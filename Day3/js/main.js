function reverseName() {
  let userName = prompt("Username");
  let reverseUserName = userName.split("").reverse().join("");
  alert(reverseUserName);
}
reverseName();

function addAndAlert() {
  let num1 = parseInt(prompt("Number", 10));
  let num2 = parseInt(prompt("Number", 10));
  let totalNum = num1 + num2;
  alert(totalNum);
}
addAndAlert();

function yourName() {
  let firstName = prompt("First Name");
  let lastName = prompt("Last Name");
  let birthDay = prompt("Your Birthday");
  confirm(`${birthDay} is correct?`);
  console.log(firstName);
  alert(lastName);
  alert(birthDay);
}
yourName();
