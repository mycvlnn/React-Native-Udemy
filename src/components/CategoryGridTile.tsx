import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Card from './UI/Card'

type Props = {
  text: string
  color: string
  onPress: () => void
}

const CategoryGridTile: React.FC<Props> = ({ text, color, onPress }) => {
  return (
    <View style={styles.gridItem}>
      <Card color={color} onPress={onPress}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{text}</Text>
        </View>
      </Card>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 8
  },

  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
})
