import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../constants/colors'

interface IProps {
  message?: string
  onConfirm?: () => void
}

const ErrorOverlay: React.FC<IProps> = ({ message, onConfirm }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>An error has occurred</Text>
      <Text style={styles.text}>{message}</Text>
      <Pressable style={styles.button} onPress={onConfirm}>
        <Text style={styles.text}>Ok</Text>
      </Pressable>
    </View>
  )
}

export default React.memo(ErrorOverlay)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary700
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: Colors.primary50
  },
  text: {
    color: Colors.primary50,
    textAlign: 'center'
  },
  button: {
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: Colors.primary800,
    minWidth: 100,

    marginTop: 16
  }
})
