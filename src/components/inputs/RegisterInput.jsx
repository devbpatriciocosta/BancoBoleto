/* eslint-disable react/display-name */
import styled from 'styled-components'
import { useController } from 'react-hook-form'

const RegisterInputContainer = styled.div`
  min-width: 90%;
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
  padding: 15px 10px;
  box-sizing: border-box;

  transition: 0.5s ease-in-out;

  :hover {
    box-shadow: 0 0 0 2px #bf81f9;
  }

  &:focus {
    outline: none;
  }

  ${(props) => props.error && `border: 2px solid ${props.theme.error};`}
`

const ErrorLabel = styled.span`
  color: ${(props) => props.theme.error};
  font-weight: bold;
  font-size: 12px;
`

const errorMessage = {
  'string.empty': 'Este campo é obrigatório',
  'string.email': 'Digite um e-mail válido',
  // eslint-disable-next-line prettier/prettier
  'duplicated': 'Já existe uma conta registrada com esse valor'
}

const RegisterInput = ({ label, name, control, defaultValue = '', ...props }) => {
  const {
    field: { value, onChange },
    fieldState: { error }
  } = useController({ name, control, defaultValue })

  return (
    <RegisterInputContainer>
      <RegisterLabel>{label}</RegisterLabel>
      <StyledRegisterInput
        placeholder={label}
        error={error}
        {...props}
        value={value}
        onChange={onChange}
      />
      {error && <ErrorLabel>{errorMessage[error.type] || error.message}</ErrorLabel>}
    </RegisterInputContainer>
  )
}

export default RegisterInput
