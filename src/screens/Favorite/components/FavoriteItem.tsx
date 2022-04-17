import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import Icon from '../../../components/Icon/Icon'
import { Color } from '../../../constants/colors'

interface Props {
  name: string
  rating: number
  address: string
  image: string
  onPress: () => void
}

const FavoriteItem: React.FC<Props> = ({
  name,
  rating,
  address,
  image,
  onPress
}) => {
  return (
    <Pressable style={styles.favoriteItem} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.favoriteImage} />
      <View style={styles.info}>
        <Text numberOfLines={1} style={styles.favoriteName}>
          {name}
        </Text>
        <Text>
          <Text style={styles.star}>
            <Icon name="star" color={Color.primary_300} size={14} />{' '}
            {Math.floor(Math.random() * 4) + 1}
          </Text>{' '}
          ({rating})
        </Text>
        <Text numberOfLines={1} style={styles.address}>
          {address}
        </Text>
      </View>
    </Pressable>
  )
}

export default FavoriteItem

const styles = StyleSheet.create({
  favoriteItem: {
    backgroundColor: '#ccc',
    borderRadius: 15,
    flexDirection: 'row',
    marginBottom: 16
  },
  favoriteImage: {
    width: '35%',
    aspectRatio: 1,
    borderRadius: 15
  },
  info: {
    padding: 16,
    flex: 1
  },
  favoriteName: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 20,
    color: Color.primary_300,
    marginBottom: 4
  },
  address: {
    marginTop: 10,
    fontSize: 14
  },
  star: {
    color: Color.primary_300
  }
})
