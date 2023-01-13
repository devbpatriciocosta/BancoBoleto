import styled from 'styled-components'

import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash } from 'react-icons/fa'

const StyledTr = styled.tr``

const StyledTd = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
  word-break: break-all;

  svg {
    width: 18px;
    height: 18px;
  }
`
export default function GridItem({ item, onDelete }) {
  return (
    <StyledTr>
      <StyledTd>{item.desc}</StyledTd>
      <StyledTd>{item.amount}</StyledTd>
      <StyledTd alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </StyledTd>
      <StyledTd alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </StyledTd>
    </StyledTr>
  )
}
