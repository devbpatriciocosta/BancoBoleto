import styled from 'styled-components'
import { useState } from 'react'
import Grid from '../grid/Grid'

const FormContainer = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  background: linear-gradient(37deg, #0172af, #74fabd, #8776d4, #932ebb);
  background-size: 300% 300%;
  animation: gradient-animation 6s ease infinite;
  color: white;
  box-shadow: 0 0 5px black;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;

  transition: 0.3s ease-in-out;

  :hover {
    transform: translateY(5px);
  }

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
  border: 1px solid hsla(620, 100%, 50%, 0.5);
`

const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-left: 20px;
    margin-right: 5px;
    accent-color: hsla(620, 100%, 50%, 0.5);
    margin-top: 0;
  }
`

const FormButton = styled.button`
  padding: 5px 10px;
  border: 2px solid white;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  background-color: hsla(630, 60%, 50%, 0.9);

  cursor: pointer;
`

export default function Form({ handleAdd, transactionsList, setTransactionsList }) {
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
    <>
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
          <Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <Label htmlFor="rExpenses">Saída</Label>
        </RadioGroup>
        <FormButton onClick={handleSave}>Adicionar</FormButton>
      </FormContainer>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  )
}
