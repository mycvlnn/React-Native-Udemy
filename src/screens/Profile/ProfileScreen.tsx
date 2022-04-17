import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import Icon from '../../components/Icon/Icon'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../constants/type'

const Profile = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Categories'>>()

  return (
    <LinearGradient
      colors={['#FFC285', '#F1F5F8', '#FFFFFF']}
      style={{ flex: 1, padding: 30 }}
      locations={[0, 0.7, 0.95]}
    >
      <View style={styles.container}>
        <Pressable
          onPress={() => navigation.navigate('Categories')}
          style={{ alignItems: 'flex-end' }}
        >
          <Icon name="close" size={36} color="black" />
        </Pressable>
        <View style={styles.infor}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://picsum.photos/1000' }}
          />
          <Text style={styles.name}>Taiki Mori</Text>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {},
  avatar: {
    borderRadius: 197,
    width: 200,
    height: 200
  },
  infor: {
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#101820',
    alignItems: 'center'
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 40,
    marginTop: 14
  }
})

export default Profile
