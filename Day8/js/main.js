// let dog = {
//   name: "Spot",
//   fur: "Brown",
//   legs: "Four",
//   speak: function dogBarking() {
//     alert("Woof!");
//   },
//   howl: function dogHowling() {
//     alert("Non stop howling!");
//   },
// };
// let dogInfo = `${dog.name},${dog.fur},${dog.legs}`;
// let newP = document.createElement("p");
// document.body.appendChild(newP);
// newP.innerText = dogInfo;

class car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    console.log(this);
  }
  render() {
    const text = document.createElement("p");
    text.innerText = `${this.make},${this.model},${this.year},${this.color}`;
    document.body.appendChild(text);
  }
}

const car1 = new car("Infiniti", "Q50", "2017", "Black");
const car2 = new car("Hyundai", "Elantra", "2010", "Red");
const car3 = new car("Nissan", "GT-R", "2023", "Silver");
const car4 = new car("Kia", "Sportage", "2023", "Blue");

car1.render();
car2.render();
car3.render();
car4.render();
