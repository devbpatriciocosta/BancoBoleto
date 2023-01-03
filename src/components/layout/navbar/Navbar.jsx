import styled from 'styled-components'

import LeftNavbar from './LeftNavbar'
import RightNavbar from './RightNavbar'

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  position: fixed;
  background-color: ${(props) => props.theme.primary};
`

export default function Navbar() {
  return (
    <StyledNavbar>
      <LeftNavbar />
      <RightNavbar />
    </StyledNavbar>
  )
}
