import Link from 'next/link'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { signinSchema } from '../modules/user/user.schema'

import OpenCreateButton from '../../buttons/OpenCreateButton'
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
    resolver: joiResolver(signinSchema)
  })

  const [loadingButton, setLoadingButton] = useState(false)

  const handleForm = async (data) => {
    try {
      setLoadingButton(true)
      const { status } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/signin`,
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
    } finally {
      setLoadingButton(false)
    }
  }

  return (
    <>
      <CardContainer>
        <CardContainerTitle>
          <h1>Obtenha o CONTROLE,</h1>
          <h3>Faça seu cadastro</h3>
        </CardContainerTitle>
        <Form onSubmit={handleSubmit(handleForm)}>
          <RegisterInput label="Nome" placeholder="Insira seu primeiro nome" control={control} />
          <RegisterInput
            label="Sobrenome"
            placeholder="Insira seu sobronme completo"
            control={control}
          />
          <RegisterInput label="Usuário" placeholder="Crie um nome de usuário" control={control} />
          <RegisterInput
            label="E-mail"
            type="email"
            placeholder="Insira o seu e-mail"
            control={control}
          />
          <RegisterInput
            label="Senha"
            type="password"
            placeholder="Crie sua senha"
            control={control}
          />
          <OpenCreateButton
            loading={loadingButton}
            type="submit"
            disabled={Object.keys(errors).length}
          >
            Cadastrar
          </OpenCreateButton>
        </Form>
        <Text>
          Já possui uma conta? <Link href="/loginPage">Faça seu login aqui!</Link>
        </Text>
      </CardContainer>
    </>
  )
}
