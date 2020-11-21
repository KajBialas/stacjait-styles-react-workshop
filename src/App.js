import React, { useState } from 'react';
import InlineBackgroundForm from './components/InlineBackgorundForm';
import './App.scss';
import CssExampleElement from './components/CssExampleElement';

const ContainerStyle = {
  color: 'red',
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
    <div className="container">
      Aplikacja
      <CssExampleElement />
    </div>
  );
}

export default App;
