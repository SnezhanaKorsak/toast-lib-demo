import styled from 'styled-components';
import theme from '../../theme';

export const StyledSettings = styled.div`
  width: ${theme.spaces[14]}px;
  height: ${theme.spaces[11]}px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  border-radius: ${theme.borderRadius[1]}px;
  box-shadow: ${theme.boxShadows[0]};
  padding: ${theme.spaces[4]}px;
`;

export const Title = styled.div`
  position: absolute;
  top: -15px;
  background-color: ${theme.colors.white};
  font-size: ${theme.fontSizes[4]}px;
`
export const StyledOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spaces[2]}px;
`
export const Button = styled.button`
  background-color: ${theme.colors.pink};
  padding: ${theme.spaces[1]}px;
  border: none;
  border-radius: ${theme.borderRadius[0]}px;
  outline: none;
  font-size: ${theme.fontSizes[3]}px;
  color: ${theme.colors.white};
  cursor: pointer;
`
