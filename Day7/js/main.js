for (i = 1; i <= 100; i++) {
  const text = document.createElement("p");
  if (i % 3 === 0 && i % 5 === 0) {
    text.innerText = "fizzbuzz";
  } else if (i % 5 === 0) {
    text.innerText = "fizz";
  } else if (i % 3 === 0) {
    text.innerText = "buzz";
  } else {
    text.innerText = i;
  }
  document.body.appendChild(text);
}
