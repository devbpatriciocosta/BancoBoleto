import Link from 'next/link'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { useRouter } from 'next/router'

import { sigInSchema } from '../../../../modules/user/user.schema'

import RegisterInput from '../../inputs/RegisterInput'

const CardContainerTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`

const CardContainer = styled.div`
  width: 520px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 50px;

  transition: 0.4s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
  align-items: center;
`

const Button = styled.button`
  cursor: pointer;
  width: 188px;
  height: 35px;
  border-radius: 20px;
  background-color: #92f981;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;

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
  margin-bottom: 20px;
  font-size: 14px;

  a {
    text-decoration: none;
    font-size: 14px;
    font-weight: bolder;
    color: black;
  }
`

export default function WelcomeCard() {
  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm({
    resolver: joiResolver(sigInSchema)
  })

  const handleForm = async (data) => {
    try {
      const { status } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/signIn`,
        data
      )
      if (status === 201) {
        router.push('/')
      }
    } catch (err) {
      if (err.response.data.code === 11000) {
        setError(err.response.data.duplicatedKey, {
          type: 'duplicated'
        })
      }
    }
  }

  // const [loadingButton, setLoadingButton] = useState(false)

  // const handleForm = async (data) => {
  //   try {
  //     setLoadingButton(true)
  //     const { status } = await axios.post(
  //       `${process.env.NEXT_PUBLIC_API_URL}/api/user/signin`,
  //       data
  //     )
  //     if (status === 201) {
  //       router.push('/')
  //     }
  //   } catch (err) {
  //     if (err.response.data.code === 11000) {
  //       setError(err.response.data.duplicatedKey, {
  //         type: 'duplicated'
  //       })
  //     }
  //   } finally {
  //     setLoadingButton(false)
  //   }
  // }

  return (
    <>
      <CardContainer>
        <CardContainerTitle>
          <h1>Obtenha o CONTROLE,</h1>
          <h3>Faça seu cadastro</h3>
        </CardContainerTitle>
        <Form onSubmit={handleSubmit(handleForm)}>
          <RegisterInput
            label="Nome"
            placeholder="Insira seu primeiro nome"
            name="firstName"
            control={control}
          />
          <RegisterInput
            label="Sobrenome"
            placeholder="Insira seu sobronme completo"
            name="lastName"
            control={control}
          />
          <RegisterInput
            label="Usuário"
            placeholder="Crie um nome de usuário"
            name="user"
            control={control}
          />
          <RegisterInput
            label="E-mail"
            type="email"
            placeholder="Insira o seu e-mail"
            name="email"
            control={control}
          />
          <RegisterInput
            label="Senha"
            type="password"
            placeholder="Crie sua senha"
            name="password"
            control={control}
          />
          <Button type="submit" disabled={Object.keys(errors).length > 0}>
            Cadastrar
          </Button>
        </Form>
        <Text>
          Já possui uma conta? <Link href="/loginPage">Faça seu login aqui!</Link>
        </Text>
      </CardContainer>
    </>
  )
}
