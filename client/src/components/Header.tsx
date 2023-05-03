
import React, { useContext } from 'react'

import { auth } from '../context/auth'
import Button from './Buttons/TextButton'

const Header = () => {

  const isAuthenticated = useContext(auth)[0]

  return (
    <div className={`flex ${isAuthenticated ? 'justify-between' : 'justify-center'} py-6 bg-primary shadow-lg`}>
      <h1 className='text-center font-bold text-3xl text-teritiary'>Jobs Api</h1>
      {isAuthenticated ? <Button text='Logout' /> : ''}
    </div>
  )
}

export default Header
