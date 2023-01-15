import styled from 'styled-components'

import LoginCard from '../../components/layout/cards/LoginCard'

const FrontPageContainer = styled.div`
  background-image: url('/MoneyTreeJpeg.jpg');
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
