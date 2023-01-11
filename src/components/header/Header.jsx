import styled from 'styled-components'

const TitleHeader = styled.div`
  background-color: ${(props) => props.theme.primary};
  height: 150px;
  text-align: center;
  padding-top: 20px;
  font-size: 46px;
  font-weight: bold;
`

export default function Header() {
  return (
    <>
      <TitleHeader>Controle Financeiro</TitleHeader>
    </>
  )
}
