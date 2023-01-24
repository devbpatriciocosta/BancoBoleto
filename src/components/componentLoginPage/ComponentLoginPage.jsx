import styled from 'styled-components'

import LoginCard from '../../components/layout/cards/LoginCard'

const FrontPageContainer = styled.div`
  background: linear-gradient(37deg, #0172af, #74fabd, #8776d4, #932ebb);
  background-size: 300% 300%;
  animation: gradient-animation 6s ease infinite;
  height: 100vh;

  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

const CardContainer = styled.div`
  padding: 150px 0 0 770px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function ComponentLoginPage() {
  return (
    <>
      <FrontPageContainer>
        <CardContainer>
          <LoginCard />
        </CardContainer>
      </FrontPageContainer>
    </>
  )
}
