import styled from 'styled-components'

const StyledInputDigit = styled.input`
  width: 26px;
  height: 22px;
  border: none;
  border-radius: 50px;
  padding-left: 8px;
  transition: 0.5s ease-in-out;

  :hover {
    box-shadow: 0 0 0 2px black;
  }
`

export default function InputDigit() {
  return <StyledInputDigit placeholder="*" />
}
