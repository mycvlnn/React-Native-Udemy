import axios from 'axios'
import { END_POINT_REFRESH, signinUrl, signupUrl } from './config'

const authenticateUser = async (url, email, password) => {
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true
  })
  return response
}

export const createUser = async (email, password) => {
  const response = await authenticateUser(signupUrl, email, password)

  return response
}

export const loginUser = async (email, password) => {
  const response = await authenticateUser(signinUrl, email, password)
  return response
}

export const refreshToken = async (refreshToken) => {
  const response = await axios.post(END_POINT_REFRESH, {
    grant_type: 'refresh_token',
    refresh_token: refreshToken
  })

  return response.data
}
