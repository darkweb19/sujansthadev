export const classCode = `class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}`;

export const instanceCode = `let person1 = new Person("John", 30);
let person2 = new Person("Jane", 25);`;

export const methodCode = `class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return \`Hello, my name is \${this.name} and I am \${this.age} years old.\`;
    }
}`;
