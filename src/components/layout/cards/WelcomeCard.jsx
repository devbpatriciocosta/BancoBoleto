import Link from 'next/link'
import styled from 'styled-components'

import IconImages from '../../iconImages/IconImages'
import OpenCreateButton from '../../buttons/OpenCreateButton'

const CardContainer = styled.div`
  width: 290px;
  min-height: 445px;
  border-radius: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  gap: 30px;
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

const CardText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const StyledDoLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  a {
    text-decoration: none;
    font-size: 20px;
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
        <CardText>
          <h3>O internet banking pensado pra você</h3>
        </CardText>
        <IconImages imageName="PiggyBank" type="svg" />
        <OpenCreateButton />
        <StyledDoLogin>
          <Link href="/initialSignupPage">Faça seu cadastro!</Link>
        </StyledDoLogin>
      </CardContainer>
    </>
  )
}
