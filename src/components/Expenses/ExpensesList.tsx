import { Text, View, FlatList, ListRenderItem, StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors'
import { Expense } from '../../models'
import ExpenseItem from './ExpenseItem'

interface IProps {
  expenses: Expense[]
}

const ExpensesList: React.FC<IProps> = ({ expenses }) => {
  const renderExpenseItem: ListRenderItem<Expense> = ({ item }) => {
    return <ExpenseItem {...item} />
  }

  const renderListEmptyData = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.text}>No Data</Text>
      </View>
    )
  }
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item!.id}
      ListEmptyComponent={renderListEmptyData}
    />
  )
}

export default ExpensesList

const styles = StyleSheet.create({
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.error50
  }
})
