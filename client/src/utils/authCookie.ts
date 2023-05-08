import Cookies from 'js-cookie'

const getToken = () => {
  return Cookies.get(import.meta.env.VITE_COOKIE_NAME_AUTH)
}

const createToken = (token: string) => {
  return Cookies.set(import.meta.env.VITE_COOKIE_NAME_AUTH, token, { sameSite: 'strict' })
}

const clearToken = () => {
  return Cookies.remove(import.meta.env.VITE_COOKIE_NAME_AUTH)
}

export { getToken, createToken, clearToken }
