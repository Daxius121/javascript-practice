function catFactRequest() {
  fetch("https://catfact.ninja/fact")
    .then(function (res) {
      console.log("res", res);
      return res.json();
    })
    .then((data) => {
      let text = document.createElement("p");
      text.innerText = data.fact;
      document.body.appendChild(text);
    });
}
let catButton = document.createElement("button");
catButton.innerText = "Click me";
catButton.addEventListener("click", function () {
  catFactRequest();
});
document.body.appendChild(catButton);
