function oddOrEven() {
  if (arguments[0] % 2 === 0) {
    alert("Even");
  } else if (arguments[0] % 1 === 0) {
    alert("Odd");
  } else {
    alert("You broke it");
  }
}
oddOrEven(6);
