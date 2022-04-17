import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/meals'
import { RootStackParamList } from '../constants/type'
import { Color } from '../constants/colors'

type Props = NativeStackScreenProps<RootStackParamList, 'Categories'>

const CategoriesScreen: React.FC<Props> = ({ navigation }) => {
  const navigateHandler = (categoryId: string) => {
    navigation.navigate('Meals', { categoryId })
  }

  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.primary_200,
    flex: 1
  }
})
