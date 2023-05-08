

import React, { useContext, useState } from 'react'
import { auth } from '../context/auth'

import FormButton from './Buttons/FormButton'
import Error from './Error'

import { AiOutlineBackward } from 'react-icons/ai'

import { Link } from 'react-router-dom'
import { validateEmail } from '../utils/validateEmail'
import { createToken } from '../utils/authCookie'

import axios from 'axios'
import ErrorCenter from './ErrorCenter'


const RegisterForm = () => {

  const [isAuthenticated, setIsAuthenticated] = useContext(auth)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [nameErr, setNameerr] = useState(false)
  const [emError, setEmerror] = useState(false)
  const [passErr, setPasserr] = useState(false)

  const [already, setAlready] = useState(false)

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
        setPasserr(false)
      }
      else {
        setPasserr(true)
      }
    }
    else {
      setPasserr(true)
    }
    if (name) {
      setNameerr(false)
    }
    else {
      setNameerr(true)
    }
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    checkInput()
    if (!nameErr && !emError && !passErr) {
      register()
    }
  }

  const register = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/register`, { name: name, email: email, password: password })
      const token = res.data.token
      createToken(token)
      setIsAuthenticated(true)
    }
    catch (error) {
      setAlready(true)
    }
  }

  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg bg-teritiary py-5 px-3 rounded-lg'>
      <form>
        <Link to='/login' className='absolute top-7 '><AiOutlineBackward className='text-xl text-gray-500' /></Link>
        <h1 className='text-center text-2xl font-semibold'>Enter details</h1>
        <div className='flex gap-2 flex-col md:w-[400px] w-[250px] my-2'>
          <label className='text-lg'>Name</label>
          <input type="text" value={name} className='border-[1px] border-black rounded-s pl-2 py-1' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
        </div>
        {nameErr ? <Error text='Please enter a valid name' /> : ''}
        <div className='flex gap-2 flex-col md:w-[400px] w-[250px] my-2'>
          <label className='text-lg'>Email</label>
          <input type="text" value={email} className='border-[1px] border-black rounded-s pl-2 py-1' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
        </div>
        {emError ? <Error text='Please enter a valid email' /> : ''}
        <div className='flex gap-2 flex-col md:w-[400px] w-[250px] my-2'>
          <label className='text-lg'>Password</label>
          <input type="password" value={password} className='border-[1px] border-black rounded-s pl-2 py-1' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
        </div>
        {passErr ? <Error text='Please enter a valid password' /> : ''}
      </form>
      <FormButton handleSubmit={handleSubmit} text='Register' />
      {already ? <ErrorCenter text='Account already exists' /> : ''}
    </div>
  )
}

export default RegisterForm
