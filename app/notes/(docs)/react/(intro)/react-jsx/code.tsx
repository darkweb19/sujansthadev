export const elementCode = `const element = <h1> Hello, React! </h1>;`;

export const expressionCode = `const name = "Sujan Shrestha";
const element = <h1> Hello,{name} </h1>;`;

export const attackCode = `const title = response.potentiallyMaliciousInput;
// This is safe:
const element=<h1>{title}</h1>;`;
