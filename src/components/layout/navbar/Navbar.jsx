import styled from 'styled-components'

import LeftNavbar from './LeftNavbar'
import Burguer from './Burger'

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  width: 85%;
  height: 100px;
  position: fixed;
  background-color: none;

  @media (max-width: 875px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70px;
    padding: 10px;
    gap: 10px;
  }

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80px;
  }
`

export default function Navbar() {
  return (
    <StyledNavbar>
      <LeftNavbar />
      <Burguer />
    </StyledNavbar>
  )
}
