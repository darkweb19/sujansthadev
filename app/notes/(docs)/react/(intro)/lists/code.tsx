export const listCode = `import React from "react";
export const MyList = () => {
	const data = ["Code", "JavaScript", "React", "Next"];
	return (
		<ul>
			{data.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
};`;
