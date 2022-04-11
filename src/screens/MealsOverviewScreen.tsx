import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../constants/type'

type Props = NativeStackScreenProps<RootStackParamList, 'Meals'>

const MealsOverviewScreen: React.FC<Props> = ({ route }) => {
  const params = route.params
  return (
    <View style={styles.mealsContainer}>
      <Text>Meals screen : {params.categoryId}</Text>
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  mealsContainer: {
    flex: 1,
    padding: 16
  }
})
