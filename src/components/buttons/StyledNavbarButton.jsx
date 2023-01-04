import styled from 'styled-components'

const StyledNavbarButton = styled.button`
  width: 58px;
  height: 22px;
  border: none;
  border-radius: 50px;
  background-color: ${(props) => props.theme.secondary};
  cursor: pointer;
  transition: 0.3s ease-in-out;

  :hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
    background-color: ${(props) => props.theme.primary};
  }

  :active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`
export default function NavbarButton() {
  return <StyledNavbarButton>Entrar</StyledNavbarButton>
}
