import styled from 'styled-components'

const StyledFooter = styled.div`
  background: linear-gradient(37deg, #0172af, #74fabd, #8776d4, #932ebb);
  background-size: 300% 300%;
  animation: gradient-animation 6s ease infinite;
  text-align: center;
  padding: 10px 0;
  font-weight: 400;
  font-size: 20px;
  border-radius: 50px 50px 0 0;
  color: white;
  height: 40px;

  box-shadow: 0 0 10px black;
`

export default function Footer() {
  return (
    <StyledFooter>
      Criado por <b>Bruno Patrício Costa</b> - <b>devbpatriciocosta</b> - 2022
    </StyledFooter>
  )
}
