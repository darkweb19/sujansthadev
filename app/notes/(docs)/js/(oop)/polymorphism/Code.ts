export const polyCode = `class Shape {
    constructor(name) {
        this.name = name;
    }
    draw() {
        console.log(\`Drawing a \${this.name}\`);
    }
}

class Circle extends Shape {
    draw() {
        console.log(\`Drawing a Circle\`);
    }
}

class Square extends Shape {
    draw() {
        console.log(\`Drawing a Square\`);
    }
}

let shape = new Shape("Shape");
let circle = new Circle();
let square = new Square();

shape.draw(); //Drawing a Shape
circle.draw(); //Drawing a Circle
square.draw(); //Drawing a Square
`;
