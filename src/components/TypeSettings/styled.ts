import styled from 'styled-components';
import theme from "../../theme";

export const Input = styled.input`
 position: absolute;
 opacity: 0;
 z-index: -1;
 margin-right: 8px;
 
 &:checked + label::before {
   width: 100%;
   top: 0;
   height: ${theme.spaces[5]}px;
   background: ${theme.colors.pink};
   border-radius: ${theme.borderRadius[1]}px;
}

 &:checked + label {
 color: ${theme.colors.white};
 line-height: 18px;
padding: ${theme.spaces[1]}px ${theme.spaces[2]}px ${theme.spaces[1]}px ${theme.spaces[2]}px;
}
`;

export const Label = styled.label`
  display: block;
  position: relative;
  padding: ${theme.spaces[1]}px ${theme.spaces[1]}px ${theme.spaces[1]}px ${theme.spaces[4]}px;
  font-size: ${theme.fontSizes[3]}px;
  line-height: ${theme.fontSizes[3]}px;
  cursor: pointer;
  
  &::before {
  box-sizing: border-box;
  content: " ";
  position: absolute;
  top: 5px;
  left: 0;
  display: block;
  width: ${theme.spaces[3]}px;
  height: ${theme.spaces[3]}px;
  border: 2px solid ${theme.colors.pink};
  border-radius: 50%;
  z-index: -1;
  transition: all 0.5s ease 0s;
  }
`
