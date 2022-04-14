import { Text, StyleSheet, View } from 'react-native'
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer'
import UserScreen from './screens/UserScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import HomeScreen from './screens/HomeScreen'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          drawerLabel: 'Welcome',
          drawerIcon: () => <Ionicons name="person" size={20} color="red" />,
          drawerActiveBackgroundColor: 'orange',
          headerShown: true,
          title: 'Hahaha',
          headerStyle: { backgroundColor: '#11bd28' },
          headerTintColor: 'white',
          headerRight: () => (
            <Pressable onPress={() => alert('1')}>
              <Ionicons
                style={{ marginRight: 20 }}
                name="person"
                size={20}
                color="white"
              />
            </Pressable>
          ),
          drawerLabelStyle: { color: 'black' },
          drawerActiveTintColor: '#345'
        }}
      >
        <Drawer.Screen
          name="UserScreen"
          component={UserScreen}
          options={{ drawerLabel: 'Profile' }}
        />
        <Drawer.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            drawerLabel: 'Welcome',
            drawerIcon: () => <Ionicons name="person" size={20} color="red" />,
            drawerActiveBackgroundColor: 'orange',
            headerShown: true,
            title: 'Hahaha',
            headerStyle: { backgroundColor: '#11bd28' },
            headerTintColor: 'white',
            headerRight: () => (
              <Pressable onPress={() => alert('1')}>
                <Ionicons
                  style={{ marginRight: 20 }}
                  name="person"
                  size={20}
                  color="white"
                />
              </Pressable>
            ),
            drawerLabelStyle: { color: 'black' },
            drawerActiveTintColor: '#345'
          }}
        />
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
