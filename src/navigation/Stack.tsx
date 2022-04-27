import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackPamramList } from '../models'
import ManageExpenses from '../screens/ManageExpense'
import BottomTabNavigator from './BottomTab'
import { Colors } from '../constants/colors'

const Stack = createNativeStackNavigator<RootStackPamramList>()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{
        headerTintColor: Colors.accent500,
        headerStyle: { backgroundColor: Colors.primary700 }
      }}
    >
      <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ManageExpense"
        component={ManageExpenses}
        options={{
          title: 'Manage Expense',
          presentation: 'modal'
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
