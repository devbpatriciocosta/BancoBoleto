import styled from 'styled-components'

import { GiBank } from 'react-icons/gi'

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme.fontColor};
  width: 100%;
  position: absolute;
  padding-top: 5px;
  font-size: 40px;
  gap: 10px;

  transition: 0.3s ease-in-out;

  h1,
  h2 {
    font-size: 3.5rem;
    font-weight: 500;
    animation: lights 5s 750ms linear infinite;
    cursor: grab;
  }

  @media (max-width: 780px) {
    text-align: center;
    position: absolute;
  }

  @media (max-width: 425px) {
    text-align: center;
    position: absolute;
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

export default function Navbar() {
  return (
    <StyledNavbar>
      <h1>Banco do Seu Boleta</h1>
      <h2>
        <GiBank />
      </h2>
    </StyledNavbar>
  )
}
