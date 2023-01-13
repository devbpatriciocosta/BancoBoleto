import styled from 'styled-components'

import GridItem from '../gridItem/GridItem'

const StyledGrid = styled.table`
  width: 98%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
`

const StyledThead = styled.thead``

const StyledTbody = styled.tbody``

const StyledTr = styled.tr``

const StyledTh = styled.th`
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
  width: ${(props) => (props.width ? props.width + '%' : 'auto')};
`

export default function Grid({ itens, setItens }) {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID)
    setItens(newArray)
    localStorage.setItem('transactions', JSON.stringfy(newArray))
  }

  return (
    <>
      <StyledGrid>
        <StyledThead>
          <StyledTr>
            <StyledTh width={40}>Descrição</StyledTh>
            <StyledTh width={40}>Valor</StyledTh>
            <StyledTh width={10} alignCenter>
              Tipo
            </StyledTh>
            <StyledTh width={10}></StyledTh>
          </StyledTr>
        </StyledThead>
        <StyledTbody>
          {itens?.map((item, index) => (
            <GridItem key={index} item={item} onDelete={onDelete} />
          ))}
        </StyledTbody>
      </StyledGrid>
    </>
  )
}
