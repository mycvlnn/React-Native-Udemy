import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  useWindowDimensions
} from 'react-native'
import React from 'react'
import Title from '../components/Title'
import Colors from '../constants/colors'
import { fontFamily } from '../constants/fonts'
import ButtonPrimary from '../components/Button/ButtonPrimary'

const Highlighter = ({ children }) => {
  return <Text style={styles.textHighlight}>{children}</Text>
}

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  const { width } = useWindowDimensions()

  if (width > 500) {
    return (
      <View style={[styles.rootContainer, { flexDirection: 'row' }]}>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 24 }}>
          <Title>GAME OVER</Title>
          <View style={[styles.imageContainer, { width: 200, height: 200 }]}>
            <Image
              style={styles.image}
              source={require('../assets/success.png')}
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.summaryText}>
            Your phone needed <Highlighter>{roundsNumber}</Highlighter> rounds
            to guess the number <Highlighter>{userNumber}</Highlighter>
          </Text>
          <View>
            <ButtonPrimary onClick={onStartNewGame}>
              Start New Game
            </ButtonPrimary>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/success.png')} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Highlighter>{roundsNumber}</Highlighter> rounds to
        guess the number <Highlighter>{userNumber}</Highlighter>
      </Text>
      <View>
        <ButtonPrimary onClick={onStartNewGame}>Start New Game</ButtonPrimary>
      </View>
    </View>
  )
}

export default GameOverScreen

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    flex: 1
  },
  imageContainer: {
    width: deviceWidth < 380 ? 250 : 300,
    height: deviceWidth < 380 ? 250 : 300,
    borderRadius: 150,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: Colors.primary800,
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.primary800,
    textShadowColor: Colors.accent500,
    fontFamily: fontFamily.open_sans,
    marginBottom: 16
  },
  textHighlight: {
    fontWeight: 'bold',
    fontFamily: fontFamily.open_sans_bold,
    color: Colors.primary500
  }
})
