import React, { useState } from 'react'
import { ScrollView, KeyboardAvoidingView, Alert } from 'react-native'
import AuthContent from '../components/Auth/AuthContent'
import LoadingOverlay from '../components/ui/LoadingOverlay'
import useAuth from '../hooks/use-auth'
import { createUser } from '../utils/api/user-api'

function SignupScreen() {
  const [isLoading, setIsLoading] = useState(false)
  const { authenticate } = useAuth()

  const signUpHandler = async ({ email, password }) => {
    try {
      setIsLoading(true)
      const { data } = await createUser(email, password)
      authenticate({
        token: data.idToken,
        expiresIn: data.expiresIn,
        refreshToken: data.refreshToken
      })
    } catch (error) {
      Alert.alert('Signup failed', 'Could not create user. Please try again.')
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <LoadingOverlay message="Signup..." />
  }

  return (
    <KeyboardAvoidingView behavior="position">
      <ScrollView>
        <AuthContent onAuthenticate={signUpHandler} />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default SignupScreen
