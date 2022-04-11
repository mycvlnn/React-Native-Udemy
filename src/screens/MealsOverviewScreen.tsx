import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MealsOverviewScreen: React.FC = () => {
  return (
    <View style={styles.mealsContainer}>
      <Text>Meals screen</Text>
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  mealsContainer: {
    flex: 1,
    padding: 16
  }
})
