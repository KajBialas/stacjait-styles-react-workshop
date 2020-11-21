import React, { useState } from 'react';
import { StyledContainer, StyledInput } from './style';

function ExampleForm() {
  const [ color, setColor ] = useState('');

  const handleColor = e => setColor(e.target.value);
  return (
    <StyledContainer color={color}>
      <StyledInput value={color} onChange={handleColor} />
    </StyledContainer>
  )
};

export default ExampleForm;