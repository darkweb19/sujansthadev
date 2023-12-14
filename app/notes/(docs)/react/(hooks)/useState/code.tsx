export const initializeCode = `import { useState } from "react";
const App = () => {
	const [cound, setCount] = useState(0);
};`;
export const readStateCode = `import { useState } from "react";
const App = () => {
	const [cound, setCount] = useState(0);
	return <div>Hello , count value is {count}</div>;
};
export default App;`;

export const updateStateCode = `import { useState } from "react";
const App = () => {
	const [cound, setCount] = useState(0);
	setCount(4);
	return <div>Hello , count value is {count}</div>;
};
export default App;`;
