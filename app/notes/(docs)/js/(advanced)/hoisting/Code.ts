export const variableCode = `console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5
`;

export const functionCode = `foo(); // Output: "Hello, I am a function!"

function foo() {
  console.log("Hello, I am a function!");
}`;

export const errorCode = `console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // Output: 10
`;

export const warningCode = `sayHello(); // TypeError: sayHello is not a function
var sayHello = function() {
  console.log("Hello!");
};
`;
