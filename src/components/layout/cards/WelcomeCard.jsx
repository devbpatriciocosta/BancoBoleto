import styled from 'styled-components'

import IconImages from '../../iconImages/IconImages'
import OpenCreateButton from '../../buttons/OpenCreateButton'

const CardContainer = styled.div`
  width: 70%;
  height: 445px;
  border-radius: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
`

const CardTitle = styled.div`
  width: 188px;
  height: 35px;
  border-radius: 20px;
  background-color: #92f981;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export default function WelcomeCard() {
  return (
    <>
      <CardContainer>
        <CardTitle>Banco Seu Boleto</CardTitle>
        <CardText>
          <h3>O internet banking pensado pra você</h3>
        </CardText>
        <IconImages imageName="PiggyBank" type="svg" />
        <OpenCreateButton />
      </CardContainer>
    </>
  )
}
