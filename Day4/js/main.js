function promptAndCompare() {
  let num1 = parseInt(prompt("Number"));
  let num2 = parseInt(prompt("Number"));
  if (num1 === NaN) {
    alert("Please enter a Numeral");
  } else if (num2 === NaN) {
    alert("Please enter a Numeral!");
  } else if (num1 > num2) {
    alert("Number 1 is larger!");
  } else if (num2 > num1) {
    alert("Number 2 is larger!");
  } else {
    alert("Congrats you broke it!");
  }
}
promptAndCompare();
