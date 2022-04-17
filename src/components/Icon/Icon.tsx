import React from 'react'
import { View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

type Props = {
  size: number
  color: string
  name: keyof typeof Ionicons.glyphMap
}

const Icon: React.FC<Props> = ({ size, color, name }) => {
  return (
    <View>
      <Ionicons size={size} color={color} name={name} />
    </View>
  )
}

export default Icon
