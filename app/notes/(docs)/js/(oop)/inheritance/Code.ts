export const inheritanceCode = `function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return \`Hello, my name is \${this.name} and I am \${this.age} years old.\`;
}

function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

let student = new Student("John", 25, "Computer Science");
console.log(student.greet()); // "Hello, my name is John and I am 25 years old."
console.log(student.major); // "Computer Science"
`;
