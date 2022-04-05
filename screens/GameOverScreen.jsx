import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import Colors from '../constants/colors'

const GameOverScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/success.png')} />
      </View>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  rootContainer: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    marginTop: '20%'
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
  }
})
