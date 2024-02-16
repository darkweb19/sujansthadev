export const idCode = `document.getElementById("myElement").innerHTML = "This is my new text";`;

export const byClassNameCode = `let elements = document.getElementsByClassName("myClass");
for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = "This is my new text";
}`;

export const createElementCode = `let newDiv = document.createElement("div");
document.body.appendChild(newDiv);`;
