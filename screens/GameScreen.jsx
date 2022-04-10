import { useState, useEffect } from 'react'

import { View, StyleSheet, Alert, FlatList } from 'react-native'
import ButtonPrimary from '../components/Button/ButtonPrimary'
import NumberContainer from '../components/game/NumberContainer'
import Title from '../components/Title'
import Card from '../components/UI/Card'
import InstructionText from '../components/UI/InstructionText'
import { AntDesign } from '@expo/vector-icons'
import RoundItem from '../components/game/RoundItem'

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
  const initialGuess = generateRandomBetween(1, 100, chosenNumber)

  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [listRoundsGuess, setListRoundsGuess] = useState([])

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
    setListRoundsGuess((prevRoundsGuess) => [newGuess, ...prevRoundsGuess])
  }

  const lengthRound = listRoundsGuess.length

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])

  useEffect(() => {
    if (currentGuess === chosenNumber) {
      onGameOver(lengthRound)
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
          <View style={styles.btn}>
            <ButtonPrimary onClick={nextGuessHandler.bind(this, 'lower')}>
              <AntDesign name="minus" size={16} color="white" />
            </ButtonPrimary>
          </View>
          <View style={styles.btn}>
            <ButtonPrimary onClick={nextGuessHandler.bind(this, 'greater')}>
              <AntDesign name="plus" size={16} color="white" />
            </ButtonPrimary>
          </View>
        </View>
      </Card>
      <View style={styles.roundsContainer}>
        <FlatList
          data={listRoundsGuess}
          renderItem={({ item, index }) => (
            <RoundItem round={lengthRound - index} guess={item} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    margin: 36,
    flex: 1
  },
  numberGuess: {
    marginTop: 40,
    padding: 15
  },
  actions: {
    flexDirection: 'row'
  },
  btn: {
    flex: 1,
    margin: 4
  },
  roundsContainer: {
    flex: 1,
    padding: 16
  }
})
