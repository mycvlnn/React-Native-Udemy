import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

type Props = {
  size: number
  color: string
  name: keyof typeof Ionicons.glyphMap
  onPress?: () => void
}

const Icon: React.FC<Props> = ({ size, color, name, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons size={size} color={color} name={name} />
    </Pressable>
  )
}

export default Icon

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75
  }
})
