import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import MealsOverviewScreen from './src/screens/Meals/MealsOverviewScreen'
import { RootStackParamList } from './src/constants/type'
import MealDetailScreen from './src/screens/Meals/MealDetailScreen'
import { Color } from './src/constants/colors'
import React from 'react'
import TabBottomNavigator from './src/navigation/TabBottomNavigator'
import FavoriteProvider from './src/store/context/FavoriteContext'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoriteProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
              headerTintColor: 'white',
              headerStyle: { backgroundColor: Color.primary_300 }
            }}
          >
            {/* <Stack.Screen
            name="Categories"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          /> */}
            <Stack.Screen
              name="TabBottomSreen"
              component={TabBottomNavigator}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="Meals" component={MealsOverviewScreen} />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{ title: 'About the meal' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteProvider>
    </>
  )
}

const styles = StyleSheet.create({
  container: {}
})
