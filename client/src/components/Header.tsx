
import React, { useContext } from 'react'

import { auth } from '../context/auth'

import { HiOutlineLogout } from 'react-icons/hi'
import { clearToken } from '../utils/authCookie'

const Header = () => {

  const [isAuthenticated, setIsAuthenticated] = useContext(auth)

  const logout = () => {
    clearToken()
    setIsAuthenticated(false)
    window.location.replace('/login')
  }

  return (
    <div className={`flex ${isAuthenticated ? 'justify-between' : 'justify-center'} py-6 bg-teritiary shadow-lg`}>
      <h1 className={`text-center font-bold text-3xl text-secondary ${isAuthenticated ? 'pl-4' : ''}`}>Jobs<span className='text-primary'>App</span></h1>
      {isAuthenticated ? <HiOutlineLogout className='text-4xl text-primary mr-3 cursor-pointer transition-all duration-500 hover:text-black' onClick={logout} /> : ''}
    </div>
  )
}

export default Header
