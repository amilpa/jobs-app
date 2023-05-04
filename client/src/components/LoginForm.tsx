
import React, { useContext, useState } from 'react'

import { validateEmail } from '../utils/validateEmail'
import axios from 'axios'

import { auth } from '../context/auth'
import { createToken } from '../utils/authCookie'
import FormButton from './Buttons/FormButton'

const LoginForm = () => {

  const [isAuthenticated, setIsAuthenticated] = useContext(auth)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emerror, setEmerror] = useState(false)
  const [paserror, setPaserror] = useState(false)


  const checkInput = () => {
    if (email) {
      if (validateEmail(email)) {
        setEmerror(false)
      }
      else {
        setEmerror(true)
      }
    }
    else {
      setEmerror(true)
    }
    if (password) {
      if (password.length === 8) {
        setPaserror(false)
      }
      else {
        setPaserror(true)
      }
    }
    else {
      setPaserror(true)
    }
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    checkInput()
    login()
  }

  const login = async () => {
    const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/login`, {
      email: email,
      password: password
    })
    if (res.status === 200) {
      const token = res.data.token
      createToken(token)
      setIsAuthenticated(true)
    }
  }

  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg bg-teritiary py-5 px-3 rounded-lg'>
      <form>
        <h1 className='text-center text-2xl font-semibold'>Enter credentials</h1>
        <div className='flex gap-2 flex-col w-[400px] my-2'>
          <label className='text-xl'>Email</label>
          <input type="text" className='border-[1px] border-black rounded-s pl-2 py-2' value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
        </div>
        {emerror ? <span className='text-red-500'>Please enter valid email</span> : ''}
        <div className='flex gap-2 flex-col w-[400px] my-2'>
          <label className='text-xl'>Password</label>
          <input type="password" className='border-[1px] border-black rounded-s pl-2 py-2' value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
        </div>
        {paserror ? <span className='text-red-500'>Please enter valid password</span> : ''}
        <FormButton handleSubmit={handleSubmit} />
      </form>
    </div>
  )
}

export default LoginForm
