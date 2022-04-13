import React from 'react'
import { Text, View, StyleSheet, TextStyle } from 'react-native'

type Props = {
  duration: number
  complexity: string
  affordability: string
  style?: TextStyle
}

const MealDetails: React.FC<Props> = ({
  duration,
  complexity,
  affordability,
  style
}) => {
  return (
    <View style={styles.details}>
      <Text style={[styles.text, style]}>{duration}m</Text>
      <Text style={[styles.text, style]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.text, style]}>{affordability.toUpperCase()}</Text>
    </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    fontSize: 12,
    marginHorizontal: 4
  }
})
