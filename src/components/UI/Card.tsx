import { View, StyleSheet, Platform, Pressable } from 'react-native'

type Props = {
  color?: string
  onPress?: () => void
}

const Card: React.FC<Props> = ({ children, color = 'white', onPress }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null
        ]}
      >
        {children}
      </Pressable>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 16,
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.25,
    elevation: 4,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  },

  button: {
    overflow: 'hidden',
    borderRadius: 16,
    flex: 1
  },
  buttonPressed: {
    opacity: Platform.OS === 'ios' ? 0.5 : 1
  }
})
