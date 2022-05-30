import styled from 'styled-components'

export const MenuStyle = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  text-align: end;
`

export const MenuContentStyle = styled.button`
  margin-top: 1.5rem;
  text-transform: capitalize;
  padding: ${props => props.width ? `0.3rem ${props.width};` : ` 1rem 7rem;`};
  border-radius: 50px;
  border: none;
  color:white;
  font-weight: 600;
  background: linear-gradient(90deg, ${props => props.theme.Cyan} 0%,  ${props => props.theme.Blue} 100%);
  font-family: ${props => props.theme.fontHead};
`