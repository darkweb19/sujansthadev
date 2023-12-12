export const useEffectCode = `import { useState } from "react";
const App = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		setTimeout(() => {
			setCount((count) => count + 1);
		}, 1000);
	});
	return <div>Hello , count value is {count}</div>;
};
export default App;`;
