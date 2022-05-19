const inputs = document.querySelectorAll('input') // all of the inputs from html
const p = document.querySelector('p') // the first paragraph from html

const subTotal = inputs[0]; // the first input from html
const tipPercentage = inputs[1]; // the second input from html
const total = inputs[2]; // the third input from html
const partySize = inputs[3]; // the fourth input from html

subTotal.addEventListener('input', function() { // listen for the user to input something
    calculate()

});
tipPercentage.addEventListener('input', function() { // listen for the user to input something
    calculate()

});
partySize.addEventListener('input', function() { // listen for the user to input something   
    p.innerHTML = total.value / (Number(partySize.value)); // outputs how much each person pays
});

function calculate() {
    let currentTotal = Number(subTotal.value); // convert input value to a number
    let tip = currentTotal * (Number(tipPercentage.value) / 100); // calculates tip
    total.value = currentTotal + tip; // adds tip to total
}
// tipPercentage.value = 20;
// total.value = 120;
// partySize.value = 2;
