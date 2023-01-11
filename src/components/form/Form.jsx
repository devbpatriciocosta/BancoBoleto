import styled from 'styled-components'
import { useState } from 'react'

const FormContainer = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  background-color: #fff;
  box-shadow: 0 0 5px black;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;

  @media (max-width: 750px) {
    display: grid;
  }
`

const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label``

const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid ${(props) => props.theme.primary};
`

const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-left: 20px;
    margin-right: 5px;
    accent-color: black;
    margin-top: 0;
  }
`

const FormButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: ${(props) => props.theme.primary};
`

export default function Form({ handleAdd }) {
  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState('')
  const [isExpense, setExpense] = useState(false)

  const generateID = () => Math.round(Math.random() * 1000)

  const handleSave = () => {
    if (!desc || !amount) {
      alert('Informe a descrição e o valor!')
      return
    } else if (amount < 1) {
      alert('O valor tem que ser positivo!')
      return
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense
    }

    handleAdd(transaction)

    setDesc('')
    setAmount('')
  }

  return (
    <FormContainer>
      <InputContent>
        <Label>Descrição</Label>
        <Input value={desc} onChange={(e) => setDesc(e.target.value)} />
      </InputContent>
      <InputContent>
        <Label>Valor</Label>
        <Input value={amount} type="number" onChange={(e) => setAmount(e.target.value)} />
      </InputContent>
      <RadioGroup>
        <Input
          type="radio"
          id="rIncome"
          defaultChecked
          name="group1"
          onChange={() => setExpense(!isExpense)}
        />
        <Label htmlFor="rIncome">Entrada</Label>
        <Input type="radio" id="rExpenses" name="group1" onChange={() => setExpense(!isExpense)} />
        <Label htmlFor="rExpenses">Saída</Label>
      </RadioGroup>
      <FormButton onClick={handleSave}>Adicionar</FormButton>
    </FormContainer>
  )
}
