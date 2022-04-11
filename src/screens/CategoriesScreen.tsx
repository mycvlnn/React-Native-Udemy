import React from 'react'
import { View, FlatList } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/meals'
import { RootStackParamList } from '../constants/type'

type Props = NativeStackScreenProps<RootStackParamList, 'Categories'>

const CategoriesScreen: React.FC<Props> = ({ navigation }) => {
  const navigateHandler = (categoryId: string) => {
    navigation.navigate('Meals', { categoryId })
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <CategoryGridTile
            onPress={navigateHandler.bind(this, item.id)}
            text={item.title}
            color={item.color}
          />
        )}
      />
    </View>
  )
}

export default CategoriesScreen
