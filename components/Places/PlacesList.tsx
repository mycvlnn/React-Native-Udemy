import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../constants/colors'
import { Place } from '../../models/Place'
import PlaceItem from './PlaceItem'

interface IPlacesList {
  places: Place[]
}

const PlacesList: React.FC<IPlacesList> = ({ places }) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some!
        </Text>
      </View>
    )
  }

  return (
    <FlatList
      data={places}
      renderItem={({ item }) => {
        return <PlaceItem place={item} />
      }}
      keyExtractor={(item) => item.id}
    />
  )
}

export default PlacesList
const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200
  }
})
