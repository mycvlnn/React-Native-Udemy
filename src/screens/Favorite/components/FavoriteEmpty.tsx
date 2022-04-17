import { StyleSheet, Text, View } from 'react-native'

const FavoriteEmpty = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You haven't liked any food yet?</Text>
    </View>
  )
}
export default FavoriteEmpty

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    color: '#ccc',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
