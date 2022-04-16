import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import CategoriesScreen from './src/screens/CategoriesScreen'
import MealsOverviewScreen from './src/screens/MealsOverviewScreen'
import { RootStackParamList } from './src/constants/type'
import MealDetailScreen from './src/screens/MealDetailScreen'
import { Color } from './src/constants/colors'
import FavoriteScreen from './src/screens/FavoriteScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator<RootStackParamList>()
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="DrawerScreen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: Color.primary_300 },
        sceneContainerStyle: { backgroundColor: Color.primary_200 }
      }}
    >
      <Drawer.Screen
        name="DrawerScreen"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',

          // drawerItemStyle: { display: 'none' },
          drawerLabel: () => (
            <View>
              <Text>Head</Text>
            </View>
          )
        }}
      />
      <Drawer.Screen name="Favorite" component={FavoriteScreen} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Categories"
          screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: Color.primary_300 },
            contentStyle: {
              backgroundColor: Color.primary_200
            }
          }}
        >
          <Stack.Screen
            name="Categories"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Meals" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {}
})
