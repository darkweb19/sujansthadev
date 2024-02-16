export const callbackCode = `// Example of a function that takes a callback
function doSomething(callback) {
    callback()
}

// Define a callback function
function callbackFunction() {
  console.log("Callback executed!");
}

// Call the function with the callback
doSomethingAsync(callbackFunction);

//output -> Callback executed!`;

export const exampleCode = `document.getElementById("myButton").addEventListener("click", function() {
  console.log("Button clicked!");
});`;

export const mapCode = `const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map((num) => {
    return num
});
//here , map took a callback function as an argument`;
