import { View, StyleSheet, Text, Image } from 'react-native'
import Card from './UI/Card'

interface MealItemProps {
  imageUrl: string
  title: string
  duration: number
  complexity: string
  affordability: string
}

const MealItem: React.FC<MealItemProps> = ({
  imageUrl,
  title,
  duration,
  complexity,
  affordability
}) => {
  return (
    <View style={styles.container}>
      <Card>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.infor}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.details}>
            <Text style={styles.text}>{duration}m</Text>
            <Text style={styles.text}>{complexity.toUpperCase()}</Text>
            <Text style={styles.text}>{affordability.toUpperCase()}</Text>
          </View>
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
  },

  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    fontSize: 12,
    marginHorizontal: 4
  }
})
