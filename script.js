/*
  Group Members: 
  1. Kasit 3/1 3
  2. Thanisorn 3/1 14
  3. Sitthisak 3/1 25
  Project: Temperature Converter App
*/

// formula function to change C to F
function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

// grab html elements
let input = document.getElementById("celsius");
let button = document.getElementById("btn");
let output = document.getElementById("output");

// click event when user clicks convert button
button.addEventListener("click", function() {
    let val = parseFloat(input.value);

    // check if input is a valid number
    if (isNaN(val)) {
        output.textContent = "Please enter a number!";
    } else {
        let result = celsiusToFahrenheit(val);
        output.textContent = "Result: " + val + "°C = " + result.toFixed(1) + "°F";
    }
});