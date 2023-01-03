import { useState } from 'react'
import styled from 'styled-components'

import RightNavbar from './RightNavbar'

const StyledBurguer = styled.div`
  width: 3rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 5px;
  z-index: 20;
  display: none;

  @media (max-width: 610px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#FFFFFF' : '#FFFFFF')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0deg)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0deg)')};
    }
  }
`

const Burguer = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <StyledBurguer open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurguer>
      <RightNavbar open={open} />
    </>
  )
}

export default Burguer
