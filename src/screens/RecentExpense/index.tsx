import React, { useEffect, useState } from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackPamramList } from '../../models'
import ExpensesOutput from '../../components/Expenses/ExpensesOutput'
import { getDateMinusDays } from '../../utils/helpers/getDateMinusDaysAgo'
import useStore from '../../hooks/useStore'
import LoadingOverlay from '../../components/UI/LoadingOverlay'
import { fetchExpensesList } from '../../services/expenses-api'
import ErrorOverlay from '../../components/UI/ErrorOverlay'

type Props = NativeStackScreenProps<RootStackPamramList, 'RecentExpense'>

const RecentExpenses: React.FC<Props> = () => {
  const { expenses, setExpenses } = useStore()
  const [isFetchingData, setIsFetchingData] = useState(true)
  const [error, setError] = useState<string>()
  const expenseRecentData = expenses.filter((expense) => {
    const today = new Date()
    return expense.date > getDateMinusDays(today) && expense.date <= today
  })

  useEffect(() => {
    const getExpenses = async () => {
      try {
        const expensesData = await fetchExpensesList()
        setExpenses(expensesData)
      } catch (error) {
        setError('Could not fetch data. Please try again later')
      }
      setIsFetchingData(false)
    }
    getExpenses()
  }, [])

  if (isFetchingData) {
    return <LoadingOverlay />
  }
  if (error && !isFetchingData) {
    return <ErrorOverlay message={error} onConfirm={() => setError('')} />
  }

  return (
    <ExpensesOutput expensesData={expenseRecentData} periodName="Last 7 days" />
  )
}

export default RecentExpenses
