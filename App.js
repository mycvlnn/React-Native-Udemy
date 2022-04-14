import { Text, StyleSheet, View } from 'react-native'
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import UserScreen from './screens/UserScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import HomeScreen from './screens/HomeScreen'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3dc431'
          },
          headerTintColor: 'white',
          tabBarActiveTintColor: '#3dc431',
          tabBarActiveBackgroundColor: '#111',
          tabBarIconStyle: { fontSize: 30 },
          tabBarShowLabel: false
        }}
      >
        <Tab.Screen
          name="UserScreen"
          component={UserScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ size, color }) => (
              <Ionicons size={size} name="person" color={color} />
            ),
            headerTitle: 'User Profile'
          }}
        />
        <Tab.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            tabBarLabel: 'Welcome',
            tabBarIcon: ({ size, color }) => (
              <Ionicons size={30} name="happy" color={color} />
            ),
            headerTitle: 'Welcome'
          }}
        />
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ size, color }) => (
              <Ionicons size={30} name="home" color={color} />
            ),
            headerTitle: 'Home'
          }}
        />
      </Tab.Navigator>
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
