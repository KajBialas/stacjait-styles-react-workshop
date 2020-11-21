import React, { useState } from 'react';
import './cssExampleElement.css';

function CssExampleElement() {
  const [ active, setActive ] = useState(false);

  const handleClick = () => setActive(!active);

  return (
    <div className={active ? 'cssExampleElementContainer' : 'cssExampleElementContainerActive'}>
      <button className="cssExampleElementButton" onClick={handleClick}>Change color</button>
    </div>
  )
}

export default CssExampleElement;