import React, { useState } from 'react';
import './cssExampleElement.scss';

function CssExampleElement() {
  const [ active, setActive ] = useState(false);
  const [ color, setColor ] = useState('');

  const handleClick = () => setActive(!active);
  const handleChange = (e) => setColor(e.target.value);

  const cssExampleElementContainerStyle = {
    backgroundColor: color,
  }

  return (
    <div
      className={active ? 'cssExampleElementContainer' : 'cssExampleElementContainerActive'}
      style={cssExampleElementContainerStyle}
    >
      <button className="cssExampleElementButton" onClick={handleClick}>Change color</button>
      <input type="text" value={color} onChange={handleChange} />
      <div className="container">
        dsfsdf
      </div>
    </div>
  )
}

export default CssExampleElement;