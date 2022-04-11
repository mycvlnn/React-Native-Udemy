import React from 'react'
import { View, Text, Pressable, StyleSheet, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../constants/type'

type Props = {
  text: string
  color: string
  onPress: () => void
}

type CategoryGridTileProp = NativeStackNavigationProp<
  RootStackParamList,
  'Meals'
>

const CategoryGridTile: React.FC<Props> = ({ text, color, onPress }) => {
  const navigation = useNavigation<CategoryGridTileProp>()

  const pressHandler = () => {
    navigation.navigate('Meals')
  }

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        onPress={pressHandler}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{text}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    borderRadius: 8,
    height: 150,
    margin: 8,
    elevation: 4,
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  },
  button: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden'
  },
  buttonPressed: {
    opacity: 0.5
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
})
