import jwt_decode from 'jwt-decode'

export const login = token => {
    localStorage.setItem('token', token)
}

export const getJwt = () => {
  return localStorage.getItem('token')
}

export const removeJwt = () => {
  return localStorage.removeItem('token')
}

export const isAuthenticated = () => localStorage.getItem('token') !== null

