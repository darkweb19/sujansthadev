export const ifCode = `import React from "react";
const MyComponent = ({ condition }) => {
	if (condition) {
		return <p>This is true!</p>;
	} else {
		return <p>This is false!</p>;
	}
};
export default MyComponent;`;

export const ternaryCode = `import React from "react";
const MyComponent = ({ condition }) => {
	return (
		<div>;{condition ? <p>This is true!</p> : <p>This is false!</p>}</div>
	);
};
export default MyComponent;`;

export const logicalCode = `import React from "react";
const MyComponent = ({ condition }) => {
	return <div>;{condition && <p>This is true!</p>}</div>;
};
export default MyComponent;`;
