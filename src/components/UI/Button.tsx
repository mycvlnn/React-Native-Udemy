import React from 'react'
import { StyleSheet } from 'react-native'

import { Pressable, Text, View, ViewPropTypes, ViewStyle } from 'react-native'
import { Colors } from '../../constants/colors'

interface IProps {
  mode?: 'flat' | 'normal'
  style?: ViewStyle
  onPress?: () => void
  children: any
}

const Button: React.FC<IProps> = ({
  children,
  style,
  mode = 'normal',
  onPress
}) => {
  return (
    <View style={style}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
      >
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

export default React.memo(Button)

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary700,
    minWidth: 120,
    alignItems: 'center'
  },
  buttonText: {
    color: Colors.primary50,
    fontSize: 16
  },
  flat: {
    backgroundColor: 'transparent'
  },
  flatText: {
    color: Colors.primary100
  },
  pressed: {
    opacity: 0.75
  }
})
