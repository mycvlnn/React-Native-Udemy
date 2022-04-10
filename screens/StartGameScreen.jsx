import { useState } from 'react'

import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions
} from 'react-native'
import ButtonPrimary from '../components/Button/ButtonPrimary'
import Title from '../components/Title'
import Card from '../components/UI/Card'
import InstructionText from '../components/UI/InstructionText'
import Colors from '../constants/colors'
import { fontFamily } from '../constants/fonts'

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('')
  const { height } = useWindowDimensions()
  console.log('height', height)

  const marginTopDistannce = height < 380 ? 40 : 100

  const inputNumberHandler = (enteredValue) => {
    setEnteredNumber(enteredValue)
  }

  const resetInputNumber = () => {
    setEnteredNumber('')
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber)

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [
          {
            text: 'Okay',
            style: 'destructive',
            onPress: resetInputNumber
          }
        ]
      )
    }
    onPickNumber(chosenNumber)
  }

  return (
    <View style={[styles.rootContainer, { marginTop: marginTopDistannce }]}>
      <View style={styles.title}>
        <Title>Guess My Number</Title>
      </View>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.inputNumber}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={inputNumberHandler}
        />

        <View style={styles.actions}>
          <View style={styles.btn}>
            <ButtonPrimary onClick={resetInputNumber}>Reset</ButtonPrimary>
          </View>
          <View style={styles.btn}>
            <ButtonPrimary onClick={confirmInputHandler}>Confirm</ButtonPrimary>
          </View>
        </View>
      </Card>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    alignItems: 'center'
  },
  inputNumber: {
    fontSize: 20,
    color: Colors.accent500,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 3,
    width: 50,
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: fontFamily.open_sans_bold,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btn: {
    flex: 1,
    margin: 4
  }
})
