import styled from 'styled-components'
import Link from 'next/link'

import IconImages from '../src/components/iconImages/IconImages'
import Navbar from '../src/components/layout/navbar/Navbar'

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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #000;
  padding: 30px;
  border-radius: 50px;
  font-size: larger;
  color: ${(props) => props.theme.fontColor};

  transition: 0.3s ease-in-out;

  :hover {
    box-shadow: 0 0 0 5px hsla(620, 100%, 50%, 0.5);
  }

  h1 {
    transition: 0.4s ease-in-out;
    font-size: 3.5rem;
    font-weight: 500;
    animation: lights 5s 750ms linear infinite;
  }

  h2 {
    transition: 0.4s ease-in-out;
    font-size: 2.5rem;
    font-weight: 500;
    animation: lights 5s 750ms linear infinite;
  }

  h2:hover {
    transform: scale(1.1);
  }

  @keyframes lights {
    0% {
      color: hsl(230, 100%, 95%);
      text-shadow: 0 0 1em hsla(600, 100%, 50%, 0.2), 0 0 0.125em hsla(600, 100%, 60%, 0.3),
        -1em -0.125em 0.5em hsla(40, 100%, 60%, 0), 1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
    }

    30% {
      color: hsl(230, 80%, 90%);
      text-shadow: 0 0 1em hsla(620, 100%, 50%, 0.5), 0 0 0.125em hsla(620, 100%, 60%, 0.5),
        -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
        0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
    }

    40% {
      color: hsl(230, 40%, 80%);
      text-shadow: 0 0 1em hsla(620, 100%, 50%, 0.5), 0 0 0.125em hsla(620, 100%, 60%, 0.5),
        -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
        0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
    }

    70% {
      color: hsl(230, 80%, 90%);
      text-shadow: 0 0 1em hsla(620, 100%, 50%, 0.5), 0 0 0.125em hsla(620, 100%, 60%, 0.5),
        0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
        -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
    }

    100% {
      color: hsl(230, 100%, 95%);
      text-shadow: 0 0 1em hsla(600, 100%, 50%, 0.2), 0 0 0.125em hsla(620, 100%, 60%, 0.3),
        1em -0.125em 0.5em hsla(40, 100%, 60%, 0), -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
    }
  }
`

const StyledPiggyImage = styled.div`
  width: 110px;
  margin-top: 40px;
`

const Text = styled.p`
  text-align: center;
  margin: 20px;
  font-size: 14px;
  color: ${(props) => props.theme.fontColor};

  a {
    font-weight: bold;
    font-size: 14px;
    background: linear-gradient(90deg, #fff, #cc7ce0, #fff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 90%;
    animation: shine 2s linear infinite;
    position: relative;
  }

  @keyframes shine {
    0% {
      background-position-x: -500%;
    }
    100% {
      background-position-x: 500%;
    }
  }
`

function HomePage() {
  return (
    <>
      <Navbar />
      <FrontPageContainer>
        <Card>
          <h1>O internet banking</h1>
          <h2>pensado pra você</h2>
          <StyledPiggyImage>
            <IconImages imageName="PiggyBank" type="svg" />
          </StyledPiggyImage>
          <Text>
            Não possui uma conta?<br></br>
            <Link href="/initialSignupPage"> Faça seu cadastro!</Link>
          </Text>
          <Text>
            Já possui uma conta?<br></br>
            <Link href="/loginPage"> Faça seu Login!</Link>
          </Text>
        </Card>
      </FrontPageContainer>
    </>
  )
}

export default HomePage
