import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootStackParamList } from '../constants/type'
import CategoriesScreen from '../screens/Categories/CategoriesScreen'
import Icon from '../components/Icon/Icon'
import { Color } from '../constants/colors'
import Profile from '../screens/Profile/ProfileScreen'
import FavoriteScreen from '../screens/Favorite/FavoriteScreen'

const Tab = createBottomTabNavigator<RootStackParamList>()

const TabBottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Color.primary_300 },
        headerTitleStyle: { color: 'white' },
        tabBarActiveTintColor: Color.primary_200
      }}
      backBehavior="history"
      initialRouteName="Categories"
    >
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="restaurant" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="heart" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="menu" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
export default TabBottomNavigator
