export const objectCode = `function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return \`Hello, my name is \${this.name} and I am \${this.age} years old.\`;
    }
}

let person1 = new Person("John", 30);
let person2 = new Person("Jane", 25);`;
