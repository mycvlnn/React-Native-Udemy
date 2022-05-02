import { Expense } from '../models'

export enum ExpenseActionKind {
  ADD_EXPENSE = 'ADD_EXPENSE',
  UPDATE_EXPENSE = 'UPDATE_EXPENSE',
  REMOVE_EXPENSE = 'REMOVE_EXPENSE',
  SET_EXPENSES = 'SET_EXPENSES'
}

export type AddExpense = {
  type: ExpenseActionKind.ADD_EXPENSE
  payload: Expense
}

export type UpdateExpense = {
  type: ExpenseActionKind.UPDATE_EXPENSE
  payload: Expense
}

export type DeleteExpense = {
  type: ExpenseActionKind.REMOVE_EXPENSE
  payload: string
}

export type SetExpenses = {
  type: ExpenseActionKind.SET_EXPENSES
  payload: Expense[]
}

export type ExpenseAction =
  | AddExpense
  | UpdateExpense
  | DeleteExpense
  | SetExpenses
