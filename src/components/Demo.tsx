import React from 'react'
import { View, Text } from 'react-native'

const Demo: React.FC = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}

export default Demo
