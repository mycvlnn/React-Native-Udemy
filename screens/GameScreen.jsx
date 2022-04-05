import { useState, useEffect, useMemo } from 'react'

import { View, StyleSheet, Alert } from 'react-native'
import ButtonPrimary from '../components/Button/ButtonPrimary'
import NumberContainer from '../components/game/NumberContainer'
import Title from '../components/Title'
import Card from '../components/UI/Card'
import InstructionText from '../components/UI/InstructionText'
import { AntDesign } from '@expo/vector-icons'

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return rndNum
  }
}

let maxBoundary = 100
let minBoundary = 1

const GameScreen = ({ chosenNumber, onGameOver }) => {
  const initialGuess = useMemo(() => {
    return generateRandomBetween(minBoundary, maxBoundary, chosenNumber)
  }, [])

  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  const nextGuessHandler = (direction) => {
    //direction => 'lower', 'greater'

    if (
      (direction === 'lower' && currentGuess < chosenNumber) ||
      (direction === 'greater' && currentGuess > chosenNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {
          text: 'Sorry!',
          style: 'cancel'
        }
      ])
      return
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }

    const newGuess = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    )

    setCurrentGuess(newGuess)
  }

  useEffect(() => {
    if (currentGuess === chosenNumber) {
      onGameOver()
    }
  }, [currentGuess, chosenNumber, onGameOver])

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer style={styles.numberGuess}>
        {currentGuess}
      </NumberContainer>
      <Card>
        <View>
          <InstructionText>Higher or Lower</InstructionText>
        </View>
        <View style={styles.actions}>
          <ButtonPrimary onClick={nextGuessHandler.bind(this, 'lower')}>
            <AntDesign name="minus" size={24} color="white" />
          </ButtonPrimary>
          <ButtonPrimary onClick={nextGuessHandler.bind(this, 'greater')}>
            <AntDesign name="plus" size={24} color="white" />
          </ButtonPrimary>
        </View>
      </Card>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    margin: 36
  },
  numberGuess: {
    marginTop: 40,
    padding: 40
  },
  actions: {
    flexDirection: 'row'
  }
})
