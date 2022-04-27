import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../constants/colors'
import { Expense } from '../../models'

interface IProps {
  expenses: Expense[]
  periodName: string
}
const ExpensesSummary: React.FC<IProps> = ({ expenses, periodName }) => {
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  return (
    <View style={styles.container}>
      <Text style={styles.txtLabel}>{periodName}</Text>
      <Text style={styles.total}>${totalAmount.toFixed(2)}</Text>
    </View>
  )
}

export default ExpensesSummary

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    backgroundColor: Colors.primary50
  },
  txtLabel: {
    fontSize: 14,
    color: Colors.primary200
  },
  total: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.primary700
  }
})
