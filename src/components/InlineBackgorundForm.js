import React, { useState } from 'react';

function InlineBackgroundForm() {
  const [ color, setColor ] = useState('');
  const [ hover, setHover ] = useState(false);

  const handleChange = (e) => setColor(e.target.value);
  const handleHoverOn = () => setHover(true);
  const handleHoverOff = () => setHover(false);

  const inlineBackgroundFormStyle = {
    backgroundColor: hover ? 'green' : color ? color : 'white',
  }

  return (
    <div style={inlineBackgroundFormStyle} onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}>
      <input type="text" value={color} onChange={handleChange} />
    </div>
  )
}

export default InlineBackgroundForm;