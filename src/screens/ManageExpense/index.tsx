import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import ExpenseForm from '../../components/ManageExpense/ExpenseForm'
import ErrorOverlay from '../../components/UI/ErrorOverlay'
import IconButton from '../../components/UI/IconButton'
import LoadingOverlay from '../../components/UI/LoadingOverlay'
import { Colors } from '../../constants/colors'
import useStore from '../../hooks/useStore'
import { Expense, RootStackPamramList } from '../../models'
import {
  addExpenseApi,
  deleteExpenseApi,
  updateExpenseApi
} from '../../services/expenses-api'

type ManageExpenseProps = NativeStackScreenProps<
  RootStackPamramList,
  'ManageExpense'
>
const ManageExpenses: React.FC<ManageExpenseProps> = ({
  route,
  navigation
}) => {
  const { addExpense, deleteExpense, updateExpense, expenses } = useStore()
  const [isSubmiting, setIsSubmiting] = useState(false)
  const [error, setError] = useState<string>()
  const idExpense = route.params?.id
  const isEdit = !!idExpense

  const defaultExpense = expenses.find((expense) => expense.id === idExpense)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdit ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEdit])

  const cancelHandler = () => {
    navigation.goBack()
  }

  const confirmHandler = async (expenseData: Expense) => {
    try {
      setIsSubmiting(true)
      if (isEdit) {
        updateExpense({
          ...expenseData,
          id: idExpense
        })
        await updateExpenseApi(idExpense, expenseData)
      } else {
        const { id } = await addExpenseApi(expenseData)

        addExpense({
          ...expenseData,
          id: id
        })
      }
      navigation.goBack()
    } catch (error) {
      setError('Could not save Expense. Please try again later. ')
      setIsSubmiting(false)
    }
  }

  const deleteExpenseHandler = async () => {
    if (!idExpense) {
      alert('Not found expense')
      return
    }
    try {
      setIsSubmiting(true)
      deleteExpense(idExpense)
      await deleteExpenseApi(idExpense)
      navigation.goBack()
    } catch (error) {
      setError('Could not delete Expense. Please try again later')
      setIsSubmiting(false)
    }
  }

  if (error && !isSubmiting) {
    return <ErrorOverlay message={error} onConfirm={() => setError('')} />
  }

  if (isSubmiting) {
    return <LoadingOverlay />
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        labelSubmit={isEdit ? 'Update' : 'Add'}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValues={defaultExpense}
      />

      {isEdit && (
        <View style={styles.buttonDelete}>
          <IconButton
            onPress={deleteExpenseHandler}
            name="trash"
            size={30}
            color="red"
          />
        </View>
      )}
    </View>
  )
}

export default ManageExpenses

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    padding: 20
  },

  buttonDelete: {
    alignItems: 'center',
    marginTop: 20,
    borderTopColor: '#ccc',
    borderTopWidth: 1
  }
})
