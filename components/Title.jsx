import { Text, StyleSheet } from 'react-native'
import { fontFamily } from '../constants/fonts'

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    borderColor: 'white',
    borderWidth: 3,
    padding: 8,
    paddingHorizontal: 20,
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 4,
    fontFamily: fontFamily.open_sans_bold
  }
})
