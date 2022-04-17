import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView
} from 'react-native'
import Icon from '../../components/Icon/Icon'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../constants/type'
import MenuList from './Components/MenuList'
import { PROFILE } from '../../data/profile'

const Profile = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Categories'>>()

  return (
    <LinearGradient
      colors={['#FFC285', '#F1F5F8', '#FFFFFF']}
      style={styles.rootContainer}
      locations={[0, 0.7, 0.95]}
    >
      <ScrollView style={styles.container}>
        <Pressable
          onPress={() => navigation.navigate('Categories')}
          style={styles.btnClose}
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
        <MenuList data={PROFILE.system} />
        <MenuList data={PROFILE.personal} />
        <MenuList data={PROFILE.setting} />
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  container: { flex: 1, paddingHorizontal: 30 },
  avatar: {
    borderRadius: 140,
    width: 140,
    height: 140
  },
  btnClose: { alignItems: 'flex-end', marginTop: 10 },
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
