import React, { useState } from 'react';
import InlineBackgroundForm from './components/InlineBackgorundForm';

const ContainerStyle = {
  color: 'red',
  backgroundColor: 'blue',
}

const HeaderStyle = {
  fontSize: '20px',
}

function App() {
  const [ color, setColor ] = useState(false);

  const handleClick = () => setColor(!color);

  const headerStyle = {
    ...HeaderStyle,
    backgroundColor: color ? 'green' : 'yellow',
  }

  return (
    <div style={ContainerStyle}>
      <h1 style={headerStyle}>Aplikacja</h1>
      <button onClick={handleClick}>Change color</button>
      <hr/>
      <InlineBackgroundForm />
    </div>
  );
}

export default App;
