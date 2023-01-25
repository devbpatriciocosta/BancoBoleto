import Link from 'next/link'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { useRouter } from 'next/router'

import { loginSchema } from '../../../../modules/user/user.schema'

import RegisterInput from '../../inputs/RegisterInput'

const CardContainer = styled.div`
  max-height: 80vh;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  padding: 40px;
  border-radius: 50px;
  font-size: larger;
  color: ${(props) => props.theme.fontColor};

  transition: 0.3s ease-in-out;

  :hover {
    box-shadow: 0 0 0 5px hsla(620, 100%, 50%, 0.5);
  }

  h1 {
    transition: 0.4s ease-in-out;
    font-size: 2.5rem;
    font-weight: 500;
    animation: lights 5s 750ms linear infinite;
  }

  h2 {
    transition: 0.4s ease-in-out;
    font-size: 1.5rem;
    font-weight: 500;
    animation: lights 5s 750ms linear infinite;
  }

  h2:hover {
    transform: scale(1.1);
  }

  @keyframes lights {
    0% {
      color: hsl(230, 100%, 95%);
      text-shadow: 0 0 1em hsla(600, 100%, 50%, 0.2), 0 0 0.125em hsla(600, 100%, 60%, 0.3),
        -1em -0.125em 0.5em hsla(40, 100%, 60%, 0), 1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
    }

    30% {
      color: hsl(230, 80%, 90%);
      text-shadow: 0 0 1em hsla(620, 100%, 50%, 0.5), 0 0 0.125em hsla(620, 100%, 60%, 0.5),
        -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
        0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
    }

    40% {
      color: hsl(230, 40%, 80%);
      text-shadow: 0 0 1em hsla(620, 100%, 50%, 0.5), 0 0 0.125em hsla(620, 100%, 60%, 0.5),
        -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
        0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
    }

    70% {
      color: hsl(230, 80%, 90%);
      text-shadow: 0 0 1em hsla(620, 100%, 50%, 0.5), 0 0 0.125em hsla(620, 100%, 60%, 0.5),
        0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
        -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
    }

    100% {
      color: hsl(230, 100%, 95%);
      text-shadow: 0 0 1em hsla(600, 100%, 50%, 0.2), 0 0 0.125em hsla(620, 100%, 60%, 0.3),
        1em -0.125em 0.5em hsla(40, 100%, 60%, 0), -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
    }
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 10px;
  align-items: center;
  width: 350px;
`

const Button = styled.button`
  cursor: pointer;
  width: 188px;
  height: 35px;
  border: 2px solid white;
  border-radius: 20px;
  background-color: hsla(630, 60%, 50%, 0.9);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;

  ${(props) => !props.disabled && 'cursor: pointer'}

  :hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
    background-color: #3e8e41;
  }

  :active {
    box-shadow: 0 5px #666;
    transform: translateY(2px);
  }

  :disabled {
    background-color: #666;
  }
`

const Text = styled.p`
  text-align: center;
  margin: 20px;
  font-size: 14px;
  color: ${(props) => props.theme.fontColor};

  a {
    font-weight: bold;
    font-size: 14px;
    background: linear-gradient(90deg, #fff, #cc7ce0, #fff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 90%;
    animation: shine 2s linear infinite;
    position: relative;
  }

  @keyframes shine {
    0% {
      background-position-x: -500%;
    }
    100% {
      background-position-x: 500%;
    }
  }
`

export default function LoginCard() {
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
    <>
      <CardContainer>
        <h1>Controle suas finanças,</h1>
        <h2>obtenha a liberdade!</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <RegisterInput
            label="Usuário ou E-mail"
            placeholder="Insira o seu Usuário ou E-mail aqui"
            name="userOrEmail"
            control={control}
          />
          <RegisterInput
            label="Senha"
            placeholder="Insira a sua senha"
            type="password"
            name="password"
            control={control}
          />
          <Button type="submit" disabled={Object.keys(errors).length > 0}>
            Entrar
          </Button>
        </Form>
        <Text>
          <Link href="/landingPage">Página Inicial</Link>
        </Text>
      </CardContainer>
    </>
  )
}
