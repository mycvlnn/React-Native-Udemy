import { Text, StyleSheet, Platform } from 'react-native'
import { fontFamily } from '../constants/fonts'

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    borderColor: 'white',
    // borderWidth: Platform.OS === 'android' ? 3 : 0,
    borderWidth: Platform.select({ ios: 0, android: 3 }),
    padding: 8,
    paddingHorizontal: 20,
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 4,
    fontFamily: fontFamily.open_sans_bold,
    maxWidth: '80%',
    width: 300
  }
})
