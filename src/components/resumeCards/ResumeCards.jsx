import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 5px black;
  border-radius: 5px;
  padding: 5px 15px;
  width: 30%;

  transition: 0.3s ease-in-out;

  :hover {
    transform: translateY(2px);
  }

  @media (max-width: 750px) {
    width: 20%;

    p {
      font-size: 12px;
    }

    span {
      font-size: 20px;
    }

    svg {
      display: none;
    }
  }
`

const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  margin: 20px auto;

  svg {
    width: 25px;
    height: 25px;
  }
`

const HeaderTitle = styled.p`
  font: 20px;
`

const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
`

export default function ResumeCards({ title, Icon, value }) {
  return (
    <CardContainer>
      <CardHeader>
        <HeaderTitle>{title}</HeaderTitle>
        <Icon />
      </CardHeader>
      <Total>{value}</Total>
    </CardContainer>
  )
}
