import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

interface IProps {
  icon: keyof typeof Ionicons.glyphMap
  size?: number
  sizeIcon?: number
  color?: string
  children: string
  onPress: () => void
}

const OutlinedButton: React.FC<IProps> = ({
  icon,
  size,
  color,
  children,
  sizeIcon,
  onPress
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        { borderColor: color }
      ]}
      onPress={onPress}
    >
      <Ionicons color={color} name={icon} size={sizeIcon} style={styles.icon} />
      <Text style={{ fontSize: size, color: color }}>{children}</Text>
    </Pressable>
  )
}

export default OutlinedButton

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4
  },
  icon: {
    marginRight: 4
  },
  pressed: {
    opacity: 0.7
  }
})
