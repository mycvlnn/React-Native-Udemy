import { createDrawerNavigator } from '@react-navigation/drawer'
import Icon from '../components/Icon/Icon'
import { Color } from '../constants/colors'
import { RootStackParamList } from '../constants/type'
import CategoriesScreen from '../screens/Categories/CategoriesScreen'
import FavoriteScreen from '../screens/Favorite/FavoriteScreen'
import Profile from '../screens/Profile/ProfileScreen'

const Drawer = createDrawerNavigator<RootStackParamList>()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="DrawerScreen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: Color.primary_300 },
        sceneContainerStyle: { backgroundColor: Color.primary_200 },
        drawerPosition: 'right',
        drawerActiveTintColor: 'red'
      }}
    >
      <Drawer.Screen
        name="DrawerScreen"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Icon color={color} name="menu" size={size} />
          )
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon color={color} name="heart" size={size} />
          )
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon color={color} name="person" size={size} />
          ),
          headerShown: false
        }}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
