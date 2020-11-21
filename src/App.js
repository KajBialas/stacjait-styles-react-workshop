import React, { useState } from 'react';
import InlineBackgroundForm from './components/InlineBackgorundForm';
import styles from './App.module.scss';
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
    <div className={styles.container}>
      <Header />
      {/*Aplikacja*/}
      <CssExampleElement />
    </div>
  );
}

export default App;
