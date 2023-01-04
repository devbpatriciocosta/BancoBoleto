import styled from 'styled-components'

import StyledNavbarButton from '../../buttons/StyledNavbarButton'
import InputAccount from '../../inputs/InputAccount'
import InputAgency from '../../inputs/InputAgency'

const StyledUl = styled.ul`
  width: 80%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-color: ${(props) => props.theme.primary};

  p {
    font-size: 18px;
    font-weight: bold;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
      Geneva, Verdana, sans-serif;
    color: ${(props) => props.theme.black};
  }

  li {
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
  }

  li:after {
    content: '';
    position: absolute;
    background-color: ${(props) => props.theme.black};
    height: 2px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }

  li:hover:after {
    width: 100%;
  }

  @media (max-width: 875px) {
    display: flex;
    align-items: center;
    height: 70px;
    width: 100%;
  }

  @media (max-width: 610px) {
    flex-flow: column nowrap;
    background: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.primary};
    position: fixed;
    backdrop-filter: blur(14px);
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;
    gap: 60px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: ${(props) => props.theme.primary};
    }
  }
`

const StyledInputDigit = styled.input`
  width: 26px;
  height: 22px;
  border: none;
  border-radius: 50px;
  padding-left: 8px;

  :hover {
    box-shadow: 0 0 0 2px black;
  }
`

export default function RightNavbar() {
  return (
    <StyledUl>
      <li>
        <p>Acesse sua conta</p>
      </li>
      <InputAgency />
      <InputAccount />
      <StyledInputDigit></StyledInputDigit>
      <StyledNavbarButton />
    </StyledUl>
  )
}
