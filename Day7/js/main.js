for (i = 1; i < 100; i++) {
  let text = document.createElement("p");
  if (i % 5 === 0 && i % 3 === 0) {
    text.innerHTML = "fizzbuzz";
  } else if (i % 5 === 0) {
    text.innerHTML = "buzz";
  } else if (i % 3 === 0) {
    text.innerHTML = "fizz";
  } else {
    text.innerHTML = i;
  }
  document.body.appendChild(text);
}
