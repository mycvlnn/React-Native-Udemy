import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'

import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import StartGameScreen from './screens/StartGameScreen'
import { LinearGradient } from 'expo-linear-gradient'
import imageBackground from './assets/background.jpg'
import GameScreen from './screens/GameScreen'
import Colors from './constants/colors'
import GameOverScreen from './screens/GameOverScreen'

export default function App() {
  const [pickedNumber, setPickedNumber] = useState('')
  const [isGameOver, setIsGameOver] = useState(false)
  const [roundsNumber, setRoundsNumber] = useState(0)
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  console.log('pickedNumber', pickedNumber)

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const pickedNumberHandler = (pickedNumber) => {
    setPickedNumber(pickedNumber)
  }

  const onGameOver = (numberRounds) => {
    setIsGameOver(true)
    setRoundsNumber(numberRounds)
  }

  const onStartNewGame = () => {
    setPickedNumber(null)
    setRoundsNumber(0)
    setIsGameOver(false)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (pickedNumber) {
    screen = <GameScreen chosenNumber={pickedNumber} onGameOver={onGameOver} />
  }

  if (isGameOver && pickedNumber) {
    screen = (
      <GameOverScreen
        roundsNumber={roundsNumber}
        userNumber={pickedNumber}
        onStartNewGame={onStartNewGame}
      />
    )
  }

  return (
    <LinearGradient
      colors={[Colors.primary600, Colors.accent500]}
      style={styles.rootContainer}
    >
      <ImageBackground
        style={styles.rootContainer}
        source={imageBackground}
        resizeMode="repeat"
        imageStyle={styles.background}
      >
        <StatusBar style="light" />
        {screen}
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  background: {
    opacity: 0.2
  }
})
