export const forLoopCode = `for (let i = 0; i < 5; i++) {
  console.log(i);
  // 0 1 2 3 4
}
`;

export const forInLoopSyntaxCode = `for (variable in object) {
  // code to be executed
}`;

export const forInLoopCode = `let person = {
  name: "John",
  age: 30,
  job: "developer"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}`;

export const outputCode = `name: John
age: 30
job: developer`;

export const forOfCode = `let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}
`;
