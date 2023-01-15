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

export default function WelcomeCard() {
  return (
    <>
      <CardContainer>
        <CardContainerTitle>
          <h1>Obtenha o CONTROLE,</h1>
          <h3>Faça seu cadastro</h3>
        </CardContainerTitle>
        <Form>
          <RegisterInput label="Nome" placeholder="Insira seu primeiro nome" />
          <RegisterInput label="Sobrenome" placeholder="Insira seu sobronme completo" />
          <RegisterInput label="Usuário" placeholder="Crie um nome de usuário" />
          <RegisterInput label="E-mail" type="email" placeholder="Insira o seu e-mail" />
          <RegisterInput label="Senha" type="password" placeholder="Crie sua senha" />
          <OpenCreateButton type="submit">Cadastrar</OpenCreateButton>
        </Form>
        <Text>
          Já possui uma conta? <Link href="/loginPage">Faça seu login aqui!</Link>
        </Text>
      </CardContainer>
    </>
  )
}
