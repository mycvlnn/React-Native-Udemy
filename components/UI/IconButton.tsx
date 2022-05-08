import React from 'react'

import { Pressable, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

interface IProps {
  icon: keyof typeof Ionicons.glyphMap
  color?: string
  size: number
  onPress?: () => void
}

const IconButton: React.FC<IProps> = ({ icon, color, size, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  )
}

export default React.memo(IconButton)

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pressed: {
    opacity: 0.75
  }
})
