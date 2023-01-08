import Link from 'next/link'
import styled from 'styled-components'

import OpenCreateButton from '../../buttons/OpenCreateButton'
import RegisterInput from '../../inputs/RegisterInput'

const CardContainer = styled.div`
  width: 290px;
  min-height: 445px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
`

const CardTitle = styled.div`
  width: 188px;
  height: 35px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 20px;
    font-weight: bold;
  }
`

const StyledDoLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;

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
        <CardTitle>
          <p>Banco Seu Boleto</p>
        </CardTitle>
        <RegisterInput />
        <RegisterInput />
        <RegisterInput />
        <RegisterInput />
        <OpenCreateButton />
        <StyledDoLogin>
          <Link href="/initialLoginPage">Fazer login</Link>
        </StyledDoLogin>
      </CardContainer>
    </>
  )
}
