

import React, { useContext, useState } from 'react'
import { auth } from '../context/auth'


const RegisterForm = () => {

  const [isAuthenticated, setIsAuthenticated] = useContext(auth)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg bg-teritiary py-5 px-3 rounded-lg'>
      <form>
        <h1 className='text-center text-2xl font-semibold'>Enter details</h1>
        <div className='flex gap-2 flex-col w-[400px] my-2'>
          <label className='text-xl'>Name</label>
          <input type="text" className='border-[1px] rounded-s pl-2 py-2' />
        </div>
        <div className='flex gap-2 flex-col w-[400px] my-2'>
          <label className='text-xl'>Email</label>
          <input type="text" className='border-[1px] rounded-s pl-2 py-2' />
        </div>
        <div className='flex gap-2 flex-col w-[400px] my-2'>
          <label className='text-xl'>Password</label>
          <input type="password" className='border-[1px] rounded-s pl-2 py-2' />
        </div>
        <button type='submit' className='w-full text-xl bg-primary text-teritiary font-semibold py-1 rounded-s mt-3'>Register</button>
      </form>
    </div>
  )
}

export default RegisterForm
