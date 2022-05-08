import React from 'react'
import { Text, View, Pressable, Image } from 'react-native'
import { Place } from '../../models/Place'

interface IProps {
  place: Place
  onPress?: () => void
}

const PlaceItem: React.FC<IProps> = ({ place, onPress }) => {
  const { address, imageUri, location, title } = place

  return (
    <Pressable onPress={onPress}>
      <Image source={{ uri: imageUri }} />
      <View>
        <Text>{title}</Text>
        <Text>{address}</Text>
      </View>
    </Pressable>
  )
}

export default React.memo(PlaceItem)
