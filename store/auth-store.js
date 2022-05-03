import React, { useState, useCallback, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { refreshToken } from '../utils/api/user-api'
import { EXPIRES_IN, REFRESH_TOKEN, TOKEN } from '../constants/config'

let refreshTimer

const ONE_MINUTES = 6000 //ms

//helper
const getTimestampExpires = (expiresIn) => {
  //second => milisecond
  return Date.now() + Number(expiresIn) * 1000
}

export const AuthContext = React.createContext({
  token: null,
  isAuthenticated: false,
  authenticate: ({ token, expiresIn, refreshToken }) => {}, //signin and signup
  logout: () => {},
  setToken: (token) => {} //fetch token when open app.
})

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState('')

  //fetch new token from firebase

  const fetchNewToken = useCallback(async () => {
    try {
      const idTokenRefresh = await AsyncStorage.getItem(REFRESH_TOKEN)

      const data = await refreshToken(idTokenRefresh)

      const experationTime = getTimestampExpires(data.expires_in)

      await AsyncStorage.setItem(TOKEN, data.id_token)
      await AsyncStorage.setItem(REFRESH_TOKEN, data.refresh_token)
      await AsyncStorage.setItem(EXPIRES_IN, JSON.stringify(experationTime))

      setAuthToken(data.id_token)
    } catch (error) {}
  }, [])

  const setToken = (token) => {
    setAuthToken(token)
  }

  //signin and signup

  const authenticatedHandler = async ({ token, expiresIn, refreshToken }) => {
    const experationTime = getTimestampExpires(expiresIn)

    try {
      await AsyncStorage.setItem(TOKEN, token)
      await AsyncStorage.setItem(REFRESH_TOKEN, refreshToken)
      await AsyncStorage.setItem(EXPIRES_IN, JSON.stringify(experationTime))

      setAuthToken(token)
    } catch (error) {}
  }

  //Logout
  const logoutHandler = async () => {
    setAuthToken(null)
    if (refreshTimer) clearTimeout(refreshTimer)
    try {
      await AsyncStorage.removeItem(TOKEN)
      await AsyncStorage.removeItem(REFRESH_TOKEN)
      await AsyncStorage.removeItem(EXPIRES_IN)
    } catch (e) {
      // saving error
    }
  }

  useEffect(() => {
    const refreshTokenHandler = async () => {
      const experationTime = await AsyncStorage.getItem(EXPIRES_IN)

      let timeLeft = Number(experationTime) - Date.now()
      if (timeLeft < ONE_MINUTES) timeLeft = 0

      refreshTimer = setTimeout(fetchNewToken, timeLeft)
    }

    if (authToken) {
      refreshTokenHandler()
    }
  }, [authToken, fetchNewToken])

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticatedHandler,
    logout: logoutHandler,
    setToken
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
