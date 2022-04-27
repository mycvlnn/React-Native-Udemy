import React, { createContext, useReducer } from 'react'
import { EXPENSES_DATA } from '../data/expenseData'
import { Expense } from '../models'
import { ExpenseAction, ExpenseActionKind } from './type'

type ExpenseContextType = {
  expenses: Expense[]
  addExpense: (expenseData: Expense) => void
  deleteExpense: (idExpense: string) => void
  updateExpense: (expenseData: Expense) => void
}

export const ExpensesContext = createContext<ExpenseContextType>({
  expenses: [],
  addExpense: (expenseData) => {},
  deleteExpense: (idExpense) => {},
  updateExpense: (expenseData) => {}
})

const reducer = (state: Expense[], action: ExpenseAction) => {
  switch (action.type) {
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
      console.log('expenseUpdated', expensesUpdated)
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
  const [expenses, dispatch] = useReducer(reducer, EXPENSES_DATA)

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
    console.log('test')
    dispatch({
      type: ExpenseActionKind.REMOVE_EXPENSE,
      payload: id
    })
  }

  const value: ExpenseContextType = {
    expenses,
    addExpense: addExpenseHandler,
    updateExpense: updateExpenseHandler,
    deleteExpense: deleteExpenseHandler
  }

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  )
}

export default ExpenseProvider
