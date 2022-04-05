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
    padding: 20,
    margin: 30
  },
  numberText: {
    fontSize: 36,
    fontFamily: fontFamily.open_sans_bold,
    color: Colors.accent500
  }
})
