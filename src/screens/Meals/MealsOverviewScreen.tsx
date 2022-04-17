import React, { useLayoutEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../constants/type'
import { CATEGORIES, MEALS } from '../../data/meals'
import MealItem from '../../components/MealItem'

type Props = NativeStackScreenProps<RootStackParamList, 'Meals'>

const MealsOverviewScreen: React.FC<Props> = ({ route, navigation }) => {
  const params = route.params

  useLayoutEffect(() => {
    const categoryName = CATEGORIES.find(
      (category) => category.id === params.categoryId
    )?.title

    navigation.setOptions({
      title: categoryName
    })
  }, [])

  const renderMealsList = () => {
    const mealsList = MEALS.filter(
      (meal) => meal.categoryIds.includes(params?.categoryId) || []
    )

    return (
      <FlatList
        data={mealsList}
        renderItem={({ item }) => {
          return <MealItem {...item} />
        }}
      />
    )
  }

  return <View style={styles.mealsContainer}>{renderMealsList()}</View>
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  mealsContainer: {
    flex: 1
  }
})
