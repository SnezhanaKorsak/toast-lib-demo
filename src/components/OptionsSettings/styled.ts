import styled from 'styled-components';
import theme from '../../theme';

export const OptionsLabel = styled.label`
  margin-right: 10px;
  font-size: ${theme.fontSizes[3]}px;
  
`;

export const AutoCloseInput = styled.input`
  width: ${theme.spaces[9]}px;
  padding: ${theme.spaces[2]}px;
  background-color: transparent;
  box-shadow: none;
  margin: 0 ${theme.spaces[1]}px;
  border-radius: ${theme.borderRadius[0]}px;
  border: 1px solid ${theme.colors.pink}; 
  outline: none;
  font-size: ${theme.fontSizes[2]}px;
`;

export const AnimationSelect = styled.select`
  padding: ${theme.spaces[2]}px;
  background-color: transparent;
  box-shadow: none;
  margin: 0 ${theme.spaces[1]}px;
  border-radius: ${theme.borderRadius[0]}px;
  border: 1px solid ${theme.colors.pink};
  outline: none;
  font-size: ${theme.fontSizes[2]}px;
  cursor: pointer;
`
