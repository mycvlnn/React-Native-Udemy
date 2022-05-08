import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AllPlaces from '../screens/AllPlaces'
import AddPlace from '../screens/AddPlace'
import { RootStackParamList } from './types'
import { routes } from './routes'
import IconButton from '../components/UI/IconButton'
import { Colors } from '../constants/colors'

const Stack = createNativeStackNavigator<RootStackParamList>()

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary500
        },
        headerTintColor: Colors.gray700,
        contentStyle: {
          backgroundColor: Colors.gray700
        }
      }}
    >
      <Stack.Screen
        name={routes.AllPlaces}
        component={AllPlaces}
        options={({ navigation }) => ({
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="add"
              color={tintColor}
              size={30}
              onPress={() => navigation.navigate(routes.AddPlace)}
            />
          )
        })}
      />
      <Stack.Screen
        name={routes.AddPlace}
        component={AddPlace}
        options={{
          title: 'Add a new Place'
        }}
      />
    </Stack.Navigator>
  )
}

export default MainStack
