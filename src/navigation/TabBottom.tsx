import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootStackParamList } from '../constants/type'
import CategoriesScreen from '../screens/CategoriesScreen'
import Icon from '../components/Icon/Icon'
import { Color } from '../constants/colors'
import Profile from '../screens/Profile/Profile'

const Tab = createBottomTabNavigator<RootStackParamList>()

const TabBottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Color.primary_300 },
        headerTitleStyle: { color: 'white' },
        tabBarActiveTintColor: Color.primary_200,
        tabBarLabelStyle: { color: 'black' }
      }}
      backBehavior="history"
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
