import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

type Props = {
  duration: number
  complexity: string
  affordability: string
}

const MealDetails: React.FC<Props> = ({
  duration,
  complexity,
  affordability
}) => {
  return (
    <View style={styles.details}>
      <Text style={styles.text}>{duration}m</Text>
      <Text style={styles.text}>{complexity.toUpperCase()}</Text>
      <Text style={styles.text}>{affordability.toUpperCase()}</Text>
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
