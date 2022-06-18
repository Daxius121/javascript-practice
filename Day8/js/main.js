let dog = {
  firstName: "Spot",
  furColor: "Brown",
  legs: "Four",
  speak: function dogSpeaking() {
    alert("Woof!");
  },
  sit: function dogSitting() {
    alert("I'm sitting");
  },
};

document.body.innerHTML = dog.firstName + "," + dog.furColor + "," + dog.legs;

class car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }
  render() {
    const text = document.createElement("p");
    text.innerText =
      this.make + " " + this.model + " " + this.year + " " + this.color;
    document.body.appendChild(text);
  }
}
const car1 = new car("Infiniti", "Q50", "2017", "Black");
const car2 = new car("Hyundai", "Elantra", "2010", "Red");
const car3 = new car("Nissan", "2022", "GT-R", "Silver");
const car4 = new car("Kia", "Sportage", "2022", "Blue");
car1.render();
car2.render();
car3.render();
car4.render();
console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);
