import styled from 'styled-components'
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa'

import ResumeCards from '../resumeCards/ResumeCards'

const ResumeContainer = styled.div`
  max-width: 1120px;
  width: 98%;
  margin: 0 auto;
  display: flex;
  gap: 50px;
  margin-top: -50px;
  justify-content: space-around;
  padding-top: 20px;
`

export default function Resume({ income, expense, total }) {
  return (
    <>
      <ResumeContainer>
        <ResumeCards title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
        <ResumeCards title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
        <ResumeCards title="Total" Icon={FaDollarSign} value={total} />
      </ResumeContainer>
    </>
  )
}
