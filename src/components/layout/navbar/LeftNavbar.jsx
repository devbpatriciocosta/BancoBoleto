import styled from 'styled-components'

const StyledUl = styled.ul`
  width: 40%;
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
    color: ${(props) => props.theme.secondary};
  }

  li {
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
  }

  li:after {
    content: '';
    position: absolute;
    background-color: ${(props) => props.theme.secondary};
    height: 2px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }

  li:hover:after {
    width: 100%;
  }

  @media (max-width: 502px) {
    display: flex;
    justify-content: left;
    width: 80%;
    padding: 10px 0;
  }

  @media (max-width: 360px) {
    display: flex;
    justify-content: left;
    width: 100%;
    padding: 10px 0;
    margin-left: 20px;
  }
`

export default function LeftNavbar() {
  return (
    <StyledUl>
      <li>
        <p>Banco Seu Boleto</p>
      </li>
    </StyledUl>
  )
}
