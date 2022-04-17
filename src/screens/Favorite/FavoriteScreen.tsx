import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Color } from '../../constants/colors'
import { RootStackParamList } from '../../constants/type'
import { MEALS } from '../../data/meals'
import { useAppSelector } from '../../hooks/use-store'
import FavoriteEmpty from './components/FavoriteEmpty'
import FavoriteItem from './components/FavoriteItem'

type Props = NativeStackScreenProps<RootStackParamList, 'Favorite'>

const FavoriteScreen: React.FC<Props> = ({ navigation }) => {
  const idsFavorite = useAppSelector((state) => state.favorite.ids)

  const navigateDetailFavorite = (id: string) => {
    navigation.navigate('MealDetail', {
      mealId: id
    })
  }

  const mealsListFavorite = MEALS.filter((meal) =>
    idsFavorite.includes(meal.id)
  )

  if (mealsListFavorite.length === 0) {
    return <FavoriteEmpty />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Your Favorite Food</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.favoriteContainer}
        data={mealsListFavorite}
        renderItem={({ item }) => {
          const values = {
            name: item.title,
            image: item.imageUrl,
            address: item.address,
            rating: item.rating
          }
          return (
            <FavoriteItem
              onPress={() => navigateDetailFavorite(item.id)}
              {...values}
            />
          )
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  favoriteContainer: {
    paddingBottom: 50
  },
  txtTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Color.primary_300
  }
})
