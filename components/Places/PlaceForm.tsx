import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../../constants/colors'
import ImagePicker from './ImagePicker'

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState<string>('')

  const changeTitleHandler = (enteredText: string) => {
    setEnteredTitle(enteredText)
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          onChangeText={changeTitleHandler}
          value={enteredTitle}
          style={styles.input}
        />
      </View>
      <ImagePicker />
    </ScrollView>
  )
}

export default PlaceForm

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24
  },
  label: {
    fontSize: 16,
    color: Colors.primary500,
    marginBottom: 8
  },
  input: {
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
    backgroundColor: Colors.primary200,
    color: Colors.gray700
  }
})
