import styled from 'styled-components'
import Link from 'next/link'

const StyledOpenCreateButton = styled.div`
  cursor: pointer;
  width: 188px;
  height: 35px;
  border-radius: 20px;
  background-color: #92f981;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;

  :hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
    background-color: #3e8e41;
  }

  :active {
    box-shadow: 0 5px #666;
    transform: translateY(2px);
  }
`

export default function OpenCreateButton() {
  return (
    <StyledOpenCreateButton>
      <Link href="/initialSignupPage">
        <h3>Cadastrar</h3>
      </Link>
    </StyledOpenCreateButton>
  )
}
