import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { useLayoutEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../../components/UI/Button'
import IconButton from '../../components/UI/IconButton'
import { Colors } from '../../constants/colors'
import useStore from '../../hooks/useStore'
import { RootStackPamramList } from '../../models'

type ManageExpenseProps = NativeStackScreenProps<
  RootStackPamramList,
  'ManageExpense'
>
const ManageExpenses: React.FC<ManageExpenseProps> = ({
  route,
  navigation
}) => {
  const { addExpense, deleteExpense, updateExpense } = useStore()
  const idExpense = route.params?.id

  const isEdit = !!idExpense

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdit ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEdit])

  const cancelHandler = () => {
    navigation.goBack()
  }

  const confirmHandler = () => {
    if (isEdit) {
      updateExpense({
        id: idExpense,
        amount: 22.4,
        date: new Date(Date.now()),
        description: 'Update every thing'
      })
      navigation.goBack()
    } else {
      addExpense({
        id: Math.random().toString(),
        amount: 22.4,
        date: new Date(Date.now()),
        description: 'Hello Every body !!'
      })
      navigation.goBack()
    }
  }

  const deleteExpenseHandler = () => {
    if (!idExpense) {
      alert('Not found expense')
      return
    }
    deleteExpense(idExpense)
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode="flat" style={styles.button} onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEdit ? 'Update' : 'Add'}
        </Button>
      </View>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginHorizontal: 8
  },
  buttonDelete: {
    alignItems: 'center',
    marginTop: 20
  }
})
