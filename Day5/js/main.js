function oddOrEven() {
  console.log(arguments[0]);
  if (arguments[0] % 2 === 0) {
    alert("Even");
  } else if (arguments[0] % 2 >= 1) {
    alert("Odd");
  } else {
    alert("You broke it!");
  }
}
oddOrEven(5);
