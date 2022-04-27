import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackPamramList } from '../../models'
import ExpensesOutput from '../../components/Expenses/ExpensesOutput'
import useStore from '../../hooks/useStore'

type Props = NativeStackScreenProps<RootStackPamramList, 'AllExpense'>

const AllExpenses: React.FC<Props> = ({ navigation }) => {
  const { expenses } = useStore()
  return <ExpensesOutput expensesData={expenses} periodName="Total" />
}

export default AllExpenses
