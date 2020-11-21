import React, { useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ExampleForm from './components/exampleForm/ExampleForm';
import Menu from './components/menu/Menu';
import { ThemeProvider } from 'styled-components';
import { theme, themeInverted } from './utils/Theme';

function App() {
  const [ active, setActive ] = useState(false);

  const handleClick = () => setActive(!active);

  return (
    <div>
      <button onClick={handleClick}>SWITCH COLOR</button>
      <ThemeProvider theme={active ? theme : themeInverted}>
        <BrowserRouter>
          <Menu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
