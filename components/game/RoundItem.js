import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'
import { fontFamily } from '../../constants/fonts'

const RoundItem = ({ guess, round }) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.textInner}>#{round}</Text>
      <Text style={styles.textInner}>Opponent's Guess: {guess}</Text>
    </View>
  )
}

export default RoundItem

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.accent500,
    color: Colors.primary800,
    borderRadius: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginVertical: 8
  },
  textInner: {
    fontSize: 14,
    fontFamily: fontFamily.open_sans
  }
})
