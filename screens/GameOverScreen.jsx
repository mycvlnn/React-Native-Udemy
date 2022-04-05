import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import Colors from '../constants/colors'
import { fontFamily } from '../constants/fonts'

const Highlighter = ({ children }) => {
  return <Text style={styles.textHighlight}>{children}</Text>
}

const GameOverScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/success.png')} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Highlighter>X</Highlighter> rounds to guess the
        number <Highlighter>Y</Highlighter>
      </Text>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    marginTop: '10%'
  },
  imageContainer: {
    width: 300,
    height: 300,
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
    fontFamily: fontFamily.open_sans
  },
  textHighlight: {
    fontWeight: 'bold',
    fontFamily: fontFamily.open_sans_bold,
    color: Colors.primary500
  }
})
