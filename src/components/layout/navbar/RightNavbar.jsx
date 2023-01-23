import styled from 'styled-components'

import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { useRouter } from 'next/router'

import { loginSchema } from '../../../../modules/user/user.schema'

import RegisterInput from '../../inputs/RegisterInput'

const StyledUl = styled.ul`
  width: 100%;
  padding: 200px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-color: none;

  p {
    font-size: 18px;
    font-weight: bold;
    color: white;
  }

  li {
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
  }

  li:after {
    content: '';
    position: absolute;
    background-color: ${(props) => props.theme.black};
    height: 2px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }

  li:hover:after {
    width: 100%;
  }

  @media (max-width: 875px) {
    display: flex;
    align-items: center;
    height: 70px;
    width: 100%;
  }

  @media (max-width: 610px) {
    flex-flow: column nowrap;
    background: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.primary};
    position: fixed;
    backdrop-filter: blur(14px);
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;
    gap: 60px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: ${(props) => props.theme.primary};
    }
  }
`

const Form = styled.form`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 15px 20px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.terciary};
  transition: 0.3s ease-in-out;

  ${(props) => !props.disabled && 'cursor: pointer'}

  :hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
    background-color: #92f981;
  }

  :active {
    box-shadow: 0 5px #666;
    transform: translateY(2px);
  }

  :disabled {
    background-color: #666;
  }
`

export default function RightNavbar() {
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm({
    resolver: joiResolver(loginSchema)
  })

  const onSubmit = async (data) => {
    try {
      const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/login`, data)
      if (status === 200) {
        router.push('/')
      }
    } catch ({ response }) {
      if (response.data === 'password incorrect') {
        setError('password', {
          message: 'A senha está incorreta'
        })
      } else if (response.data === 'not found') {
        setError('userOrEmail', {
          message: 'Usuário ou E-mail não encontrado'
        })
      }
    }
  }

  return (
    <StyledUl>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <li>
          <p>Acesso RÁPIDO</p>
        </li>
        <RegisterInput
          placeholder="Insira o seu Usuário ou E-mail aqui"
          name="userOrEmail"
          control={control}
        />
        <RegisterInput
          placeholder="Insira a sua senha"
          type="password"
          name="password"
          control={control}
        />
        <Button type="submit" disabled={Object.keys(errors).length > 0}>
          Entrar
        </Button>
      </Form>
    </StyledUl>
  )
}
