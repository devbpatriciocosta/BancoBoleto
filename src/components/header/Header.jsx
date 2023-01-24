import styled from 'styled-components'

const TitleHeader = styled.div`
  background: linear-gradient(37deg, #0172af, #74fabd, #8776d4, #932ebb);
  background-size: 300% 300%;
  animation: gradient-animation 6s ease infinite;
  height: 300px;
  text-align: center;
  padding-top: 170px;
  font-size: 46px;
  font-weight: bold;
  color: ${(props) => props.theme.fontColor};

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

export default function Header() {
  return (
    <>
      <TitleHeader>Controle Financeiro</TitleHeader>
    </>
  )
}
