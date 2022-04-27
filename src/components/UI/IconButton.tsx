import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

interface IProps {
  size: number
  color?: string
  name: keyof typeof Ionicons.glyphMap
  onPress: () => void
}
const IconButton: React.FC<IProps> = ({ size, name, color, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  )
}
export default IconButton

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16
  }
})
