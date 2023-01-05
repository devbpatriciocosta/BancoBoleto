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
  background-color: #e049e6;
  display: flex;
  align-items: center;
  justify-content: center;
`

const InfoInput = styled.div`
  width: 110px;
  height: 22px;
  border: none;
  border-radius: 50px;
  padding-left: 10px;
  transition: 0.5s ease-in-out;
  background-color: red;
`

export default function WelcomeCard() {
  return (
    <>
      <CardContainer>
        <CardTitle>Banco Seu Boleto</CardTitle>
        <InfoInput placeholder="N° da conta" />
        <InfoInput placeholder="N° da conta" />
        <IconImages imageName="PiggyBank" type="svg" />
        <OpenCreateButton />
      </CardContainer>
    </>
  )
}
