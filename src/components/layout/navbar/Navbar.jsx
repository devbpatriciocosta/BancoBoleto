import styled from 'styled-components'

import { GiBank } from 'react-icons/gi'

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme.fontColor};
  width: 100%;
  position: fixed;
  padding-top: 5px;
  font-size: 40px;

  cursor: grab;

  h1 {
    transition: 0.2s ease-in-out;
    color: ${(props) => props.theme.fontColor};
    font-size: 50px;
    font-weight: bold;
    letter-spacing: 7px;
    cursor: pointer;
  }

  h1 span {
    transition: 0.2s linear;
  }

  h1:hover span:nth-child(1) {
    margin-right: 5px;
    margin-top: 10px;
  }

  h1:hover span:nth-child(2):before {
    content: 'do Seu ';
  }

  h1:hover span:nth-child(2) {
    margin-left: 30px;
  }

  h1:hover span {
    color: #fff;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff;
  }

  h2 {
    animation: lights;
  }
`

export default function Navbar() {
  return (
    <StyledNavbar>
      <h1>
        <span>Banco</span>
        <span>Boleta</span>
      </h1>
      <h2>
        <GiBank />
      </h2>
    </StyledNavbar>
  )
}
