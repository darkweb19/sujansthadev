export const syntaxCode = `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`;

export const practicalExampleCode = `import React, { useMemo, useState } from 'react';
const ExpensiveComponent = ({ data }) => {
  // Calculate the sum of the array only when data changes
  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return data.reduce((acc, num) => acc + num, 0);
  }, [data]);

  return (
    <div>
      <p>Sum: {sum}</p>
    </div>
  );
};

const App = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  return (
    <div>
      <ExpensiveComponent data={numbers} />
      <button onClick={() => setNumbers([...numbers, Math.random() * 10])}>
        Add Number
      </button>
    </div>
  );
};

export default App;
`;
