import styled from 'styled-components'

const HeaderFontStyled = styled.h1``

const TitleHeader = styled.div`
  background-color: ${(props) => props.theme.primary};
  height: 150px;
  text-align: center;
  padding-top: 20px;
`

export default function Header() {
  return (
    <>
      <HeaderFontStyled>
        <TitleHeader>Controle Financeiro</TitleHeader>
      </HeaderFontStyled>
    </>
  )
}
