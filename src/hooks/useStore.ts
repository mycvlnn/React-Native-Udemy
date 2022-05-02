import { ExpensesContext } from './../store/expenses-context'
import { useContext } from 'react'

const useStore = () => {
  const { addExpense, deleteExpense, expenses, updateExpense, setExpenses } =
    useContext(ExpensesContext)

  return { addExpense, deleteExpense, expenses, updateExpense, setExpenses }
}

export default useStore
