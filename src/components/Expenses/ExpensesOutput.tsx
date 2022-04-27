import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import { Colors } from '../../constants/colors'
import { EXPENSES_DATA } from '../../data/expenseData'
import { Expense } from '../../models'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

interface IProps {
  expensesData: Expense[]
  periodName: string
}

const ExpensesOutput: React.FC<IProps> = ({ expensesData, periodName }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expensesData} periodName={periodName} />
      <ExpensesList expenses={expensesData} />
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary800,
    flex: 1,
    padding: 20
  }
})
