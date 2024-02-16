export const exampleCode = `function outerFunction() {
  let outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

// Create a closure by calling outerFunction and assigning the returned inner function to a variable
const closureExample = outerFunction();

// Execute the closure, which still has access to the outerVariable
closureExample(); // Output: I am from the outer function
`;
