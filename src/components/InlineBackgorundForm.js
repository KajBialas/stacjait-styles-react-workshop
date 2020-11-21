import React, { useState } from 'react';

function InlineBackgroundForm() {
  const [ color, setColor ] = useState('');

  const handleChange = (e) => setColor(e.target.value);

  const inlineBackgroundFormStyle = {
    backgroundColor: color,
  }

  return (
    <div style={inlineBackgroundFormStyle}>
      <input type="text" value={color} onChange={handleChange} />
    </div>
  )
}

export default InlineBackgroundForm;