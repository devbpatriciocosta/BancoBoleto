import styled from 'styled-components'
import WelcomeCard from '../cards/WelcomeCard'

const FrontPageContainer = styled.div`
  background-image: url('/bgSeuSeuBoleta.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`

const CardContainer = styled.div`
  padding: 150px 0 0 770px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function FrontPage() {
  return (
    <>
      <FrontPageContainer>
        <CardContainer>
          <WelcomeCard />
        </CardContainer>
      </FrontPageContainer>
    </>
  )
}
