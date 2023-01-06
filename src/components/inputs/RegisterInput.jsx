import styled from 'styled-components'

const StyledRegisterInput = styled.input`
  width: 188px;
  height: 35px;
  border-radius: 20px;
  padding-left: 10px;
  transition: 0.5s ease-in-out;
  background-color: ${(props) => props.theme.secondary};

  :hover {
    box-shadow: 0 0 0 2px black;
  }
`

export default function RegisterInput() {
  return <StyledRegisterInput />
}
