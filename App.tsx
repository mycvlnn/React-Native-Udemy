import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store } from './src/store/redux/store'

import MealsOverviewScreen from './src/screens/Meals/MealsOverviewScreen'
import { RootStackParamList } from './src/constants/type'
import MealDetailScreen from './src/screens/Meals/MealDetailScreen'
import { Color } from './src/constants/colors'
import TabBottomNavigator from './src/navigation/TabBottomNavigator'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
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
      </Provider>
    </>
  )
}

const styles = StyleSheet.create({
  container: {}
})
