import Link from 'next/link'
import styled from 'styled-components'

import IconImages from '../../iconImages/IconImages'
import OpenCreateButton from '../../buttons/OpenCreateButton'

const CardContainerTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  gap: 40px;
`

const CardContainer = styled.div`
  width: 520px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 50px;
  align-items: center;
  gap: 40px;

  transition: 0.4s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`

const StyledPiggyImage = styled.div`
  width: 110px;
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
          <h1>Banco Seu Boleto</h1>
          <h4>O internet banking pensado pra você</h4>
        </CardContainerTitle>
        <StyledPiggyImage>
          <IconImages imageName="PiggyBank" type="svg" />
        </StyledPiggyImage>
        <OpenCreateButton type="submit">Fazer login</OpenCreateButton>
        <Text>
          <Link href="/initialSignupPage">Faça seu cadastro!</Link>
        </Text>
      </CardContainer>
    </>
  )
}
