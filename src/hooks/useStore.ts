import { ExpensesContext } from './../store/expenses-context'
import { useContext } from 'react'

const useStore = () => {
  const { addExpense, deleteExpense, expenses, updateExpense } =
    useContext(ExpensesContext)

  return { addExpense, deleteExpense, expenses, updateExpense }
}

export default useStore
