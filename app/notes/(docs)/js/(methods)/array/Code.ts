export const arrayCode = ` const array_name = [item1, item2, ...];  
 const cars = ["Saab", "Volvo", "BMW"];`;

export const arrayLengthCode = `var myArray = [1, "Hello", [2, 3]];
console.log(myArray.length);`;

export const pushCode = `var myArray = [1, "Hello", [2, 3]];
myArray.push("World");
console.log(myArray); // [1, "Hello", [2, 3], "World"]`;

export const forEachCode = `let num = [1, 2, 3, 4, 5];
num.forEach((value, index, array) => {
	 console.log(value, index, array);
});`;

export const mapCode = `let sq = num.map((value) => {
	return value * value;
});
console.log(sq);`;

export const filterCode = `let even = arr.filter((item) => item % 2 == 0);
console.log(even)
//this returns the number those are even`;

export const reduceCode = `let sum = num.reduce((acc, value, index, array) => {
	return acc + value;
});
console.log(sum);`;
