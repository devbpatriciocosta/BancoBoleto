import styled from 'styled-components'
import { useRouter } from 'next/router'
import axios from 'axios'

const TitleHeader = styled.div`
  background: linear-gradient(37deg, #0172af, #74fabd, #8776d4, #932ebb);
  background-size: 300% 300%;
  animation: gradient-animation 6s ease infinite;
  height: 350px;
  text-align: center;
  padding-top: 170px;
  font-size: 46px;
  font-weight: bold;
  color: ${(props) => props.theme.fontColor};

  box-shadow: 0 0 10px black;

  border-radius: 0 0 50px 50px;

  transition: 0.3s ease-in-out;

  h1 {
    transition: 0.4s ease-in-out;
    font-size: 2.5rem;
    font-weight: 500;
    animation: lights 5s 750ms linear infinite;
  }

  @media (max-width: 780px) {
    height: 400px;
    margin-bottom: 20px;
  }

  @media (max-width: 425px) {
    height: 500px;
    padding-top: 220px;
  }

  @media (max-width: 325px) {
    height: 600px;
    padding-top: 300px;
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

const StyledLogout = styled.a`
  cursor: pointer;
  font-size: 12px;
  background-color: hsla(620, 100%, 50%, 0.5);
  border: 2px solid white;
  border-radius: 10px;
  padding: 10px;
`

export default function Header({ username }) {
  const router = useRouter()

  const handleLogout = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/logout`)
    router.push('/loginPage')
  }

  return (
    <>
      <TitleHeader>
        <h1>Controle Financeiro de {username}</h1>
        <StyledLogout onClick={handleLogout}>{username}, gostaria de desconectar?</StyledLogout>
      </TitleHeader>
    </>
  )
}
