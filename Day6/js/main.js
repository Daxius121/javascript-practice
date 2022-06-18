function getCatFact() {
  fetch("https://catfact.ninja/fact")
    .then(function (res) {
      console.log("res", res);
      return res.json();
    })
    .then((data) => {
      alert(data.fact);
    });
}
getCatFact();
