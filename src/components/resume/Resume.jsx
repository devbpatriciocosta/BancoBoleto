import styled from 'styled-components'
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa'

import ResumeCards from '../resumeCards/ResumeCards'

const ResumeContainer = styled.div`
  max-width: 1120px;
  width: 98%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  margin-top: -50px;
  justify-content: space-around;
`

export default function Resume() {
  return (
    <>
      <ResumeContainer>
        <ResumeCards title="Entradas" Icon={FaRegArrowAltCircleUp} value="1000" />
        <ResumeCards title="Saídas" Icon={FaRegArrowAltCircleDown} value="1000" />
        <ResumeCards title="Total" Icon={FaDollarSign} value="1000" />
      </ResumeContainer>
    </>
  )
}
