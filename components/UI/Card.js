import { View, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

const Card = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 24,
    backgroundColor: Colors.primary800,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.25
  }
})
