import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import CategoriesScreen from './src/screens/CategoriesScreen'
import MealsOverviewScreen from './src/screens/MealsOverviewScreen'
import { RootStackParamList } from './src/constants/type'
import MealDetailScreen from './src/screens/MealDetailScreen'
import { Color } from './src/constants/colors'

const Stack = createNativeStackNavigator<RootStackParamList>()

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
            component={CategoriesScreen}
            options={{ title: 'All Categories' }}
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
