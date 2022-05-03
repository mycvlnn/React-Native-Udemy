import React, { useContext } from 'react'
import { AuthContext } from '../store/auth-store'

const useAuth = () => {
  const { authenticate, isAuthenticated, logout, token, setToken } =
    useContext(AuthContext)

  return { authenticate, isAuthenticated, logout, token, setToken }
}

export default useAuth
