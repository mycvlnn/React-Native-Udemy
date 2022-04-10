import { Text, View, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'
import { fontFamily } from '../../constants/fonts'

export default function NumberContainer({ children, style }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    alignItems: 'center',
    margin: 20,
    backgroundColor: Colors.primary800,
    minWidth: 200
  },
  numberText: {
    fontSize: 30,
    fontFamily: fontFamily.open_sans_bold,
    color: Colors.accent500
  }
})
