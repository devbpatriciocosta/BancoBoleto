/* eslint-disable react/display-name */
import styled from 'styled-components'
import { forwardRef } from 'react'

const RegisterInputContainer = styled.div`
  min-width: 70%;
`

const RegisterLabel = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
`

const StyledRegisterInput = styled.input`
  width: 100%;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 10px;
  background-color: ${(props) => props.theme.grey};
  padding: 15px 20px;
  box-sizing: border-box;

  transition: 0.5s ease-in-out;

  :hover {
    box-shadow: 0 0 0 2px #60f101;
  }

  ${(props) => props.error && `border: 2px solid ${(props) => props.theme.error}`}

  &:focus {
    outline: none;
  }
`

// const ErrorLabel = styled.span`
//   color: ${(props) => props.theme.error};
//   font-weight: bold;
//   font-size: 14px;
// `

// const errorMessage = {
//   'string.empty': 'Este campo é obrigatório',
//   'string.email': 'Por favor, digite um e-mail válido'
// }

const RegisterInput = forwardRef(({ label, ...props }, ref) => {
  return (
    <RegisterInputContainer>
      <RegisterLabel>{label}</RegisterLabel>
      <StyledRegisterInput placeholder={label} {...props} ref={ref} />
    </RegisterInputContainer>
  )
})

export default RegisterInput
