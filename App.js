import { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'

import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import { Colors } from './constants/styles'
import AuthProvider from './store/auth-store'
import useAuth from './hooks/use-auth'
import LoadingOverlay from './components/ui/LoadingOverlay'
import AsyncStorage from '@react-native-async-storage/async-storage'
import IconButton from './components/ui/IconButton'
import { TOKEN } from './constants/config'

const Stack = createNativeStackNavigator()

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 }
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  )
}

function AuthenticatedStack() {
  const { logout } = useAuth()
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 }
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: () => (
            <IconButton color="white" icon="exit" size={22} onPress={logout} />
          )
        }}
      />
    </Stack.Navigator>
  )
}

function Root() {
  const [isLoading, setIsLoading] = useState(true)
  const { setToken } = useAuth()

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await AsyncStorage.getItem(TOKEN)
        setToken(token)
        setIsLoading(false)
      } catch (e) {
        // error reading value
      }
    }
    fetchToken()
  }, [])

  if (isLoading) {
    return <LoadingOverlay message="Loading..." />
  }

  return <Navigation />
}

function Navigation() {
  const { isAuthenticated } = useAuth()

  return (
    <NavigationContainer>
      {!isAuthenticated && <AuthStack />}
      {isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthProvider>
        <Root />
      </AuthProvider>
    </>
  )
}
