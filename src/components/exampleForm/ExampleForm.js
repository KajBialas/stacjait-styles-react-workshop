import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 500px;
  background-color: ${({color}) => color ? color : 'blue'};
  
  &:hover {
    background-color: green;
  }
`;

const Input = styled.input`
  border: 1px solid red;
  font-size: 20px;
`;

function ExampleForm() {
  const [ color, setColor ] = useState('');

  const handleColor = e => setColor(e.target.value);
  return (
    <Container color={color}>
      <Input value={color} onChange={handleColor} />
    </Container>
  )
};

export default ExampleForm;