document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  getAndDisplay();
});

function getAndDisplay() {
  const inputs = document.querySelectorAll("input");
  const val1 = inputs[0].value;
  const val2 = inputs[1].value;
  let form = document.getElementById("testForm");
  form.style.display = "none";
  alert(`You entered ${val1} and ${val2}`);
}
