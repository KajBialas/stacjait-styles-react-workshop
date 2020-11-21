import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const basicComponentStyle = css`
  color: #000;
  font-size: 20px;
`;

export const StyledContainer = styled.div`
  height: 500px;
  background-color: ${({color}) => color ? color : 'blue'};
  
  ${basicComponentStyle}
  
  &:hover {
    background-color: green;
  }
`;

export const StyledInput = styled.input`
  border: 1px solid red;
  
  ${basicComponentStyle}
`;

export const StyledLink = styled(NavLink)`
`;
