import React, { useState } from 'react'
import { Alert } from 'react-native'
import AuthContent from '../components/Auth/AuthContent'
import LoadingOverlay from '../components/ui/LoadingOverlay'
import useAuth from '../hooks/use-auth'
import { loginUser } from '../utils/api/user-api'

function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false)
  const { authenticate } = useAuth()

  const loginHandler = async ({ email, password }) => {
    try {
      setIsLoading(true)
      const { data } = await loginUser(email, password)
      authenticate({
        token: data.idToken,
        expiresIn: data.expiresIn,
        refreshToken: data.refreshToken
      })
    } catch (error) {
      Alert.alert('Login failed', 'Could not login. Please try again.')
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <LoadingOverlay message="Login..." />
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />
}

export default LoginScreen
