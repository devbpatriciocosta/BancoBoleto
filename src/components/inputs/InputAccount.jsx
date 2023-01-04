import styled from 'styled-components'

const StyledInputAccount = styled.input`
  width: 110px;
  height: 22px;
  border: none;
  border-radius: 50px;
  padding-left: 10px;
  transition: 0.5s ease-in-out;

  :hover {
    box-shadow: 0 0 0 2px black;
  }
`

export default function InputAccount() {
  return <StyledInputAccount placeholder="N° da conta" />
}
