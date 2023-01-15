import Link from 'next/link'
import styled from 'styled-components'

import OpenCreateButton from '../../buttons/OpenCreateButton'
import RegisterInput from '../../inputs/RegisterInput'

const CardContainerTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`

const CardContainer = styled.div`
  width: 520px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 50px;

  transition: 0.4s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
  align-items: center;
`

const Text = styled.p`
  text-align: center;
  margin-bottom: 20px;
  font-size: 14px;

  a {
    text-decoration: none;
    font-size: 14px;
    font-weight: bolder;
    color: black;
  }
`

export default function LoginCard() {
  return (
    <>
      <CardContainer>
        <CardContainerTitle>
          <h1>Controle suas finanças,</h1>
          <h3>obtenha a liberdade!</h3>
        </CardContainerTitle>
        <Form>
          <RegisterInput
            label="Agência"
            placeholder="Insira o código da sua agência"
            type="number"
          />
          <RegisterInput
            label="Conta"
            placeholder="Insira o número da sua conta com dígito"
            type="number"
          />
          <OpenCreateButton type="submit">Entrar</OpenCreateButton>
        </Form>
        <Text>
          Não possui uma conta? <Link href="/initialLoginPage">Faça seu cadastro aqui!</Link>
        </Text>
      </CardContainer>
    </>
  )
}
