import axios from 'axios'
import { Expense } from '../models'
import { DOMAIN, ENDPONIT, GET_EXPENSES_LIST, UPDATE_EXPENSES } from './config'

export const updateDataToServer = async (expenses: Expense[]) => {
  //   try {
  //     const response = await axios.put(UPDATE_EXPENSES, expenses)
  //     console.log(response)
  //   } catch (error) {
  //     console.error(error)
  //   }
}

export const fetchExpensesList = async () => {
  const { data: expensesList } = await axios.get<Expense[]>(GET_EXPENSES_LIST)

  const transformedData: Expense[] = []
  for (let key in expensesList) {
    const objExpense: Expense = {
      id: key,
      date: new Date(expensesList[key].date),
      amount: expensesList[key].amount,
      description: expensesList[key].description
    }
    transformedData.push(objExpense)
  }

  return transformedData
}

export const addExpenseApi = async (expense: Expense) => {
  const response = await axios.post(GET_EXPENSES_LIST, expense)

  return {
    status: response.status,
    id: response.data.name
  }
}

export const updateExpenseApi = async (id: string, expense: Expense) => {
  const url = `${DOMAIN}/${ENDPONIT}/${id}.json`
  const response = await axios.put(url, expense)

  return response
}

export const deleteExpenseApi = async (id: string) => {
  const url = `${DOMAIN}/${ENDPONIT}/${id}.json`
  const response = await axios.delete(url)

  return response
}
