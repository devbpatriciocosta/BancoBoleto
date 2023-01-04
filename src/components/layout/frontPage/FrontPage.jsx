import styled from 'styled-components'
import WelcomeCard from '../cards/WelcomeCard'

const FrontPageContainer = styled.div`
  background-image: url('/MoneyTreeJpeg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`

const CardContainer = styled.div`
  display: flex;
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
