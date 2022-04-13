import React from 'react'
import { Image, Text, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../constants/type'
import { MEALS } from '../data/meals'
import MealDetails from '../components/MealDetails'
import SubTitle from '../components/MealDetail/SubTitle'
import ListItem from '../components/MealDetail/ListItem'

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <MealDetails
          style={styles.text}
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
        <View style={styles.info}>
          <View style={styles.innerContainer}>
            <SubTitle title='ingredients' />
            <ListItem data={ingredients} />
            <SubTitle title='Steps' />
            <ListItem data={steps} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MealDetailScreen
const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  innerContainer: {
    alignItems: 'center',
    width: '80%',
  },
  image: {
    width: '100%',
    height: 350
  },
  info: { flex: 1, alignItems: 'center' },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginTop: 16
  },

  text: {
    color: 'white',
  },

})
