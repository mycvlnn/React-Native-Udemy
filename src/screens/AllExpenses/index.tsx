import React, { useEffect, useState } from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackPamramList } from '../../models'
import ExpensesOutput from '../../components/Expenses/ExpensesOutput'
import useStore from '../../hooks/useStore'
import { fetchExpensesList } from '../../services/expenses-api'
import LoadingOverlay from '../../components/UI/LoadingOverlay'
import ErrorOverlay from '../../components/UI/ErrorOverlay'

type Props = NativeStackScreenProps<RootStackPamramList, 'AllExpense'>

const AllExpenses: React.FC<Props> = ({ navigation }) => {
  const { expenses, setExpenses } = useStore()
  const [isFetchingData, setIsFetchingData] = useState(true)
  const [error, setError] = useState<string>()

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

  return <ExpensesOutput expensesData={expenses} periodName="Total" />
}

export default AllExpenses
