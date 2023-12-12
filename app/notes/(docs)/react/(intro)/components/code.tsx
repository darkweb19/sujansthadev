export const classCode = `import React, { Component } from "react";
class MyComponent extends Component {
	render() {
		return (
			<div>
				<p>This is a class-based component.</p>
			</div>
		);
	}
}`;

export const functionCode = `import React from "react";
function MyComponent() {
	return (
		<div>
			<p>This is a function-based component.</p>
		</div>
	);
}`;

export const reuseCode = `import React from "react";
function MyComponent() {
	return (
		<div>
			<p>This is a function-based component.</p>
		</div>
	);
}
export default MyComponent;`;
