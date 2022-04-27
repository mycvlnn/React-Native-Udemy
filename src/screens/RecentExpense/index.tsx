import React from 'react'
import { View, Text } from 'react-native'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackPamramList } from '../../models'
import ExpensesOutput from '../../components/Expenses/ExpensesOutput'
import { getDate7DaysAgo } from '../../utils/helpers/getDate7DaysAgo'
import useStore from '../../hooks/useStore'

type Props = NativeStackScreenProps<RootStackPamramList, 'RecentExpense'>

const RecentExpenses: React.FC<Props> = () => {
  const { expenses } = useStore()
  const expenseRecentData = expenses.filter((expense) => {
    const today = new Date()
    return expense.date > getDate7DaysAgo(today) && expense.date <= today
  })

  return (
    <ExpensesOutput expensesData={expenseRecentData} periodName="Last 7 days" />
  )
}

export default RecentExpenses
