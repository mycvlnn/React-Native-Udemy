import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import CategoriesScreen from './src/screens/CategoriesScreen'
import MealsOverviewScreen from './src/screens/MealsOverviewScreen'
import { RootStackParamList } from './src/constants/type'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Categories">
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="Meals" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {}
})
