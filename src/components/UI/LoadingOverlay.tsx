import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { Colors } from '../../constants/colors'

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  )
}

export default React.memo(LoadingOverlay)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary700
  }
})
