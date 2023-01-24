import styled from 'styled-components'

import Navbar from '../src/components/layout/navbar/Navbar'
import SignInCard from '../src/components/layout/cards/SignInCard'

const FrontPageContainer = styled.div`
  background: linear-gradient(37deg, #0172af, #74fabd, #8776d4, #932ebb);
  background-size: 300% 300%;
  animation: gradient-animation 6s ease infinite;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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

function HomePage() {
  return (
    <>
      <Navbar />
      <FrontPageContainer>
        <SignInCard />
      </FrontPageContainer>
    </>
  )
}

export default HomePage
