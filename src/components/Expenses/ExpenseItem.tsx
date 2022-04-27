import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../../constants/colors'
import { Expense, RootStackPamramList } from '../../models'
import { formattedDate } from '../../utils/helpers'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type ManageExpenseNavigationProp = NativeStackNavigationProp<
  RootStackPamramList,
  'ManageExpense'
>
const ExpenseItem: React.FC<Expense> = ({ amount, description, date, id }) => {
  const navigation = useNavigation<ManageExpenseNavigationProp>()

  const expensePressHandler = () => {
    navigation.navigate('ManageExpense', {
      id: id
    })
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.itemExpense}>
        <View>
          <Text style={styles.desc}>{description}</Text>
          <Text style={styles.dateExpense}>{formattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.txtAmount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default React.memo(ExpenseItem)

const styles = StyleSheet.create({
  itemExpense: {
    backgroundColor: Colors.primary700,
    marginVertical: 8,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.75,
    shadowRadius: 1
  },
  desc: {
    fontWeight: 'bold',
    color: Colors.primary50
  },
  dateExpense: {
    color: Colors.primary50,
    fontSize: 10
  },
  amountContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    minWidth: 80,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary50,
    borderRadius: 8
  },
  txtAmount: {
    color: Colors.primary700,
    fontWeight: 'bold'
  },
  pressed: {
    opacity: 0.75
  }
})
