import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../constants/colors'
import { Expense } from '../../models'
import { formattedDate } from '../../utils/helpers'
import Button from '../UI/Button'
import Input from '../UI/Input'

interface IProps {
  labelSubmit: string
  onCancel: () => void
  onSubmit: (expenseData: Expense) => void
  defaultValues?: Expense
}

const ExpenseForm: React.FC<IProps> = ({
  labelSubmit,
  onCancel,
  onSubmit,
  defaultValues
}) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true
    },
    date: {
      value: defaultValues ? formattedDate(defaultValues.date) : '',
      isValid: true
    },
    description: {
      value: defaultValues ? defaultValues.description : '',
      isValid: true
    }
  })

  const inputChangeHandler = (identifier: string, enteredValue: string) => {
    setInputs((curInputValues) => ({
      ...curInputValues,
      [identifier]: {
        value: enteredValue,
        isValid: true
      }
    }))
  }

  const renderFormInvalid = () => {
    const { amount, date, description } = inputs
    if (!amount.isValid || !date.isValid || !description) {
      return (
        <Text style={styles.textInvalid}>
          Invalid input values. Please check your entered data
        </Text>
      )
    }
    return null
  }

  const submitFormHandler = () => {
    const { amount, date, description } = inputs

    const amountIsValid = !isNaN(+amount.value) && +amount.value > 0
    const dateIsValid = new Date(date.value).toString() !== 'Invalid Date'
    const descIsValid = description.value.trim().length > 0

    if (!amountIsValid || !dateIsValid || !descIsValid) {
      // Alert.alert('Invalid input', 'Please check your input values')
      setInputs((curInputs) => {
        return {
          amount: {
            value: curInputs.amount.value,
            isValid: amountIsValid
          },
          date: {
            value: curInputs.date.value,
            isValid: dateIsValid
          },
          description: {
            value: curInputs.description.value,
            isValid: descIsValid
          }
        }
      })
      return
    }

    const expenseData = {
      amount: +amount.value,
      date: new Date(date.value),
      description: description.value
    }

    onSubmit(expenseData)
  }

  return (
    <ScrollView style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          invalid={!inputs.amount.isValid}
          style={styles.inputControl}
          label="Amount"
          textInputConfig={{
            keyboardType: 'number-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: inputs.amount.value
          }}
        />
        <Input
          invalid={!inputs.date.isValid}
          style={styles.inputControl}
          label="Date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: inputs.date.value
          }}
        />
      </View>
      <Input
        invalid={!inputs.description.isValid}
        label="Description"
        textInputConfig={{
          multiline: true,
          textAlignVertical: 'top',
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: inputs.description.value
        }}
      />
      {renderFormInvalid()}
      <View style={styles.buttons}>
        <Button mode="flat" style={styles.button} onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitFormHandler}>
          {labelSubmit}
        </Button>
      </View>
    </ScrollView>
  )
}

export default React.memo(ExpenseForm)

const styles = StyleSheet.create({
  form: {
    marginTop: 30
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 20
  },
  inputsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inputControl: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  button: {
    marginHorizontal: 8
  },
  textInvalid: {
    color: Colors.error500,
    textAlign: 'center'
  }
})
