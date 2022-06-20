function compareNum() {
  let num1 = prompt("Number");
  let num2 = prompt("Number");
  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter a numeral");
    compareNum();
    return;
  } else if (num1 > num2) {
    alert("First number is larger!");
  } else {
    alert("Second number is larger!");
  }
}
compareNum();
