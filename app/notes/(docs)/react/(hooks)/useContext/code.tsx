export const providerCode = `// Example providing the context
<MyContext.Provider value={/* some value */}>
  {/* Your component tree */}
</MyContext.Provider>`;

export const consumeCode = `// Example consuming the context
import React, { useContext } from 'react';

function MyComponent() {
  const contextValue = useContext(MyContext);

  // Use contextValue in your component
}
`;

export const allTiedTogtherCode = `// Example usage of context and useContext

// Step 1: Create a context
const MyContext = React.createContext();

// Step 2: Provide the context
function App() {
  return (
    <MyContext.Provider value={'Hello from Context!'}>
      <MyComponent />
    </MyContext.Provider>
  );
}

// Step 3: Consume the context
function MyComponent() {
  const contextValue = useContext(MyContext);

  return <div>{contextValue}</div>;
}`;
