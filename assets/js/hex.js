// Declares hex variable as array
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// Declares btn variable as document object with ID btn
const btn = document.getElementById("btn");
// Declares color variable as document object with class color
const color = document.querySelector(".color");


// Declares getRandomNumber function
function getRandomIndex() {
// Start at Math.random function, Math.random generates # between 0 & 1, multiplies by hex length of 16, Math.floor 
// rounds number down, returns function getRandomIndex when called
    return Math.floor(Math.random() * hex.length);
}


// Waiting for click, run code
btn.addEventListener('click', function() {
// Declare hexColor variable equal to string starting with '#' to make it hex value
    let hexColor = '#';

    // For loop, starts at 0, loops/iterates 6 times, incrementing by 1 each time
    for(let i = 0; i<6; i++){
    // Declares randomIndex variable equal to getRandomIndex function which generates a random index value
        var randomIndex = getRandomIndex();
    // A random index value from the hex array is declared as hexColor variable
        hexColor += hex[randomIndex];
    // This loop will run 6 times
    }
    // Assigns the hexColor value to the class color's text content
    color.textContent = hexColor;
    // Assigns the hexColor value to the document background color
    document.body.style.backgroundColor = hexColor;

})