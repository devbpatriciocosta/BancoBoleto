import styled from 'styled-components'
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa'

import ResumeCards from '../resumeCards/ResumeCards'

const ResumeContainer = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 20px;
  margin-top: -60px;
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
