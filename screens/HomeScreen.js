import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useDrawerStatus } from '@react-navigation/drawer'

const HomeScreen = ({ navigation }) => {
  // const isDrawerOpen = useDrawerStatus() === 'open'

  // const toggleDrawerHandler = () => {
  //   navigation.toggleDrawer()
  // }

  // const openDrawer = () => {
  //   navigation.openDrawer()
  // }
  // const closeDrawer = () => {
  //   navigation.closeDrawer()
  // }

  return (
    <View>
      <Text style={styles.textDrawer}>Home Screen</Text>
      {/* <Text style={styles.textDrawer}>{isDrawerOpen ? 'True' : 'false'}</Text> */}
      {/* <Button onPress={toggleDrawerHandler} title="Toggle Drawer" />
      <Button onPress={closeDrawer} title="Close Drawer" />
      <Button onPress={openDrawer} title="Open Drawer" /> */}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  textDrawer: {
    textAlign: 'center'
  }
})
