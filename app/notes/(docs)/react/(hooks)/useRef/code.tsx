export const domCode = `import {useRef ,useState} from 'react';
const App = () => {
	const inputRef = useRef();
	useEffect(() => {
		//Focus on the input element when the component mounts
		inputRef.current.focus();
	},[]);
	return <input ref={inputRef} />;
};
export default App;`;

export const prevCode = `import { useRef, useEffect } from "react";
const PrevValueApp = ({ value }) => {
	const prevValueRef = useRef();
	useEffect(() => {
		prevValueRef.current = value;
	}, [value]);
	return (
		<div>
			<p>Current Value: {value}</p>
			<p>Previous Value: {prevValueRef.current}</p>
		</div>
	);
};
export default PrevValueApp;`;
