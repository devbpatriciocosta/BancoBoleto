import { withIronSessionSsr } from 'iron-session/next'
import { ironConfig } from '../lib/middlewares/ironSession'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

import Form from '../src/components/form/Form'
import Navbar from '../src/components/layout/navbar/Navbar'
import Header from '../src/components/header/Header'
import Resume from '../src/components/resume/Resume'

const PageContainer = styled.div`
  background-color: white;
  height: 100vh;
`

function BankApplication({ user }) {
  const [data, setData] = useState([])
  const [transactionsList, setTransactionsList] = useState(data)
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const localData = localStorage.getItem('transactions')
    if (localData) setData(localData)
  }, [])

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount))

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount))

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2)
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2)

    const total = Math.abs(income - expense).toFixed(2)

    setIncome(`R$ ${income}`)
    setExpense(`R$ ${expense}`)
    setTotal(`${Number(income) < Number(expense) ? '-' : ''}R$ ${total}`)
  }, [transactionsList])

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction]

    setTransactionsList(newArrayTransactions)

    localStorage.setItem('transactions', JSON.stringify(newArrayTransactions))
  }

  return (
    <PageContainer>
      <Navbar />
      <Header username={user.user} />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
    </PageContainer>
  )
}

export const getServerSideProps = withIronSessionSsr(async function getServerSideProps({ req }) {
  const user = req.session.user

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: '/loginPage'
      }
    }
  }

  return {
    props: {
      user: user
    }
  }
}, ironConfig)

export default BankApplication
