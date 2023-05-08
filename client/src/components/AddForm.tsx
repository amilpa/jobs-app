
import React, { useState, ChangeEvent, type MouseEvent } from 'react'
import TextButton from './Buttons/TextButton'

import axios from 'axios'
import { getToken } from '../utils/authCookie'

import Error from './Error'

const AddForm = () => {

  const [company, setCompany] = useState('')
  const [position, setPosition] = useState('')

  const [comperr, setComperr] = useState(false)
  const [poserro, setPoserro] = useState(false)

  const checkInput = () => {
    if (company) {
      setComperr(false)
    }
    else {
      setComperr(true)
    }
    if (position) {
      setPoserro(false)
    }
    else {
      setPoserro(true)
    }
  }

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    checkInput()
    if (!comperr && !poserro) {
      addJob()
    }
  }

  const addJob = async () => {
    try {
      const token = getToken()
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/jobs`, { company, position }, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
      window.location.reload()
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <div className='md:w-[500px] w-[250px] absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg'>
      <h1 className='text-center text-xl md:text-2xl font-semibold mb-4 md:mb-2'>New job</h1>
      <form>
        <div className='flex flex-col gap-3 mb-3'>
          <label>Company</label>
          <input type="text" value={company} onChange={(e: ChangeEvent<HTMLInputElement>) => { setCompany(e.target.value) }} className='bg-inputcolor pl-2 py-1 outline-none' />
        </div>
        {comperr ? <Error text='Company field is empty' /> : ''}
        <div className='flex flex-col gap-3 mb-3'>
          <label>Position</label>
          <input type="text" value={position} onChange={(e: ChangeEvent<HTMLInputElement>) => { setPosition(e.target.value) }} className='bg-inputcolor pl-2 py-1 outline-none' />
        </div>
        {poserro ? <Error text='Position field is empty' /> : ''}
        <TextButton text='Submit' onClick={handleSubmit} />
      </form>
    </div>
  )
}

export default AddForm
