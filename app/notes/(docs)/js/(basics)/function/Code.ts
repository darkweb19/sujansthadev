export const functionCode = `function name(parameter1, parameter2, parameter3) {
  // code to be executed
}`;

export const returnCode = `// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}`;

export const varFunctionCode = `let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";`;

export const nestedFunctionCode = `function outerFunction(x) {
  function innerFunction() {
    // code to be executed
  }
  // more code
}`;

export const arrowFunctionCode = `const square = (x) => {
  return x * x;
};`;
