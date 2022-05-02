import React, { createContext, useReducer } from 'react'
import { Expense } from '../models'
import { ExpenseAction, ExpenseActionKind } from './type'

type ExpenseContextType = {
  expenses: Expense[]
  addExpense: (expenseData: Expense) => void
  deleteExpense: (idExpense: string) => void
  updateExpense: (expenseData: Expense) => void
  setExpenses: (expensesList: Expense[]) => void
}

export const ExpensesContext = createContext<ExpenseContextType>({
  expenses: [],
  addExpense: (expenseData) => {},
  deleteExpense: (idExpense) => {},
  updateExpense: (expenseData) => {},
  setExpenses: (expensesList: Expense[]) => {}
})

const reducer = (state: Expense[], action: ExpenseAction) => {
  switch (action.type) {
    case ExpenseActionKind.SET_EXPENSES: {
      return action.payload
    }

    case ExpenseActionKind.ADD_EXPENSE: {
      return [{ ...action.payload }, ...state]
    }
    case ExpenseActionKind.UPDATE_EXPENSE: {
      const expensesUpdated = [...state]
      const indexExpenseUpdate = state.findIndex(
        (expense) => expense.id === action.payload.id
      )
      const itemExpenseUpdated = state[indexExpenseUpdate]

      expensesUpdated[indexExpenseUpdate] = {
        ...itemExpenseUpdated,
        ...action.payload
      }
      return expensesUpdated
    }
    case ExpenseActionKind.REMOVE_EXPENSE: {
      return state.filter((expense) => expense.id !== action.payload)
    }
    default:
      return state
  }
}
const ExpenseProvider: React.FC = ({ children }) => {
  const [expenses, dispatch] = useReducer(reducer, [])

  const addExpenseHandler = (expenseData: Expense) => {
    dispatch({
      type: ExpenseActionKind.ADD_EXPENSE,
      payload: expenseData
    })
  }

  const updateExpenseHandler = (expenseData: Expense) => {
    dispatch({
      type: ExpenseActionKind.UPDATE_EXPENSE,
      payload: expenseData
    })
  }

  const deleteExpenseHandler = (id: string) => {
    dispatch({
      type: ExpenseActionKind.REMOVE_EXPENSE,
      payload: id
    })
  }

  const setExpensesList = (expensesData: Expense[]) => {
    dispatch({
      type: ExpenseActionKind.SET_EXPENSES,
      payload: expensesData
    })
  }

  const value: ExpenseContextType = {
    expenses,
    addExpense: addExpenseHandler,
    updateExpense: updateExpenseHandler,
    deleteExpense: deleteExpenseHandler,
    setExpenses: setExpensesList
  }

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  )
}

export default ExpenseProvider
