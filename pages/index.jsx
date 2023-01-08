import styled from 'styled-components'

const StyledBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.primary};
  height: 100vh;
`

export default function BankApplication() {
  return (
    <StyledBody>
      <h1>Esse é o banco do seu boleto - Estamos em construção!</h1>
    </StyledBody>
  )
}
