import React, { useState } from 'react';
import InlineBackgroundForm from './components/InlineBackgorundForm';
import './App.scss';
import CssExampleElement from './components/CssExampleElement';
import Header from './components/Header';
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
      <Header />
      {/*Aplikacja*/}
      {/*<CssExampleElement />*/}
    </div>
  );
}

export default App;
