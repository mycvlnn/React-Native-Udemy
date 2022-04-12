import React from 'react'
import { Image, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../constants/type'
import { MEALS } from '../data/meals'
import MealDetails from '../components/MealDetails'

type Props = NativeStackScreenProps<RootStackParamList, 'MealDetail'>

const MealDetailScreen: React.FC<Props> = ({ route }) => {
  const mealId = route.params.mealId
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  if (!selectedMeal) {
    return (
      <View>
        <Text>Meal Not Found !</Text>
      </View>
    )
  }

  const {
    imageUrl,
    title,
    duration,
    complexity,
    affordability,
    steps,
    ingredients
  } = selectedMeal

  const renderSteps = () => {
    return steps.map((step) => <Text key={step}>{step}</Text>)
  }

  const renderIngredients = () => {
    return ingredients.map((ingredient) => (
      <Text key={ingredient}>{ingredient}</Text>
    ))
  }

  return (
    <View>
      <Image source={{ uri: imageUrl }} />
      <Text>{title}</Text>
      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
      />

      <Text>ingredients</Text>
      <Text>Steps</Text>
      {renderSteps()}
      {renderIngredients()}
    </View>
  )
}

export default MealDetailScreen
