import { View, StyleSheet, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Card from './UI/Card'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../constants/type'
import MealDetails from './MealDetails'

interface MealItemProps {
  imageUrl: string
  title: string
  duration: number
  complexity: string
  affordability: string
  id: string
}

const MealItem: React.FC<MealItemProps> = ({
  imageUrl,
  title,
  duration,
  complexity,
  affordability,
  id
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const detailMealHandler = () => {
    navigation.navigate('MealDetail', {
      mealId: id
    })
  }

  return (
    <View style={styles.container}>
      <Card onPress={detailMealHandler}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.infor}>
          <Text style={styles.title}>{title}</Text>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Card>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  container: {
    margin: 16
  },
  image: { width: '100%', height: 200 },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
  infor: {
    padding: 16
  }
})
