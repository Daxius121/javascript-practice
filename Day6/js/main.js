function getCatFact() {
  fetch("https://catfact.ninja/fact")
    .then(function (res) {
      console.log("res", res);
      return res.json();
    })
    .then((data) => {
      const text = document.createElement("p");
      text.innerText = `${data.fact}`;
      document.body.appendChild(text);
    });
}
let catButton = document.createElement("button");
catButton.innerHTML = "Get a cat fact!";
catButton.addEventListener("click", function () {
  getCatFact();
});
document.body.appendChild(catButton);
