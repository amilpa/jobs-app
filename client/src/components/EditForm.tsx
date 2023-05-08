
import React, { FC, useState, type MouseEvent, useContext, ChangeEvent } from 'react'
import TextButton from './Buttons/TextButton'

import { editJob, edit } from '../context/updateJob'
import { auth } from '../context/auth'

import { getToken, clearToken } from '../utils/authCookie'
import axios from 'axios'
import Error from './Error'

type Props = {
  editJob: editJob
}

const EditForm: FC<Props> = ({ editJob }) => {

  const setIsEdit = useContext(edit)[1]

  const setIsAuthenticated = useContext(auth)[1]

  const [company, setCompany] = useState(editJob.company)
  const [position, setPosition] = useState(editJob.position)
  const [status, setStatus] = useState(editJob.status)

  const [comper, setComper] = useState(false)
  const [poserr, setPoserr] = useState(false)
  const [staterr, setStaterr] = useState(false)
  const [stateenum, setStateenum] = useState(false)

  const checkinput = () => {
    if (!company) {
      setComper(true)
    }
    if (!position) {
      setPoserr(true)
    }
    if (!status) {
      setStaterr(true)
    }
  }

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    checkinput()
    if (!comper && !poserr && !staterr) {
      updateJob()
    }
  }

  const updateJob = async () => {
    try {
      await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/jobs/${editJob._id}`, { company, position, status }, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      setIsEdit({} as editJob)
    } catch (error: any) {
      if (error.response.status == 400) {
        setStateenum(true)
      }
      else {
        clearToken()
        setIsAuthenticated(false)
      }
    }
  }

  return (
    <div className='md:w-[500px] w-[250px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-4'>
      <form className='flex flex-col mb-1'>
        <label>Company</label>
        <input type="text" value={company} onChange={(e: ChangeEvent<HTMLInputElement>) => setCompany(e.target.value)} className='my-3 pl-2 py-1 bg-inputcolor outline-none' />
        {comper ? <Error text='Please enter a company' /> : ''}
        <label>Position</label>
        <input type="text" value={position} onChange={(e: ChangeEvent<HTMLInputElement>) => setPosition(e.target.value)} className='my-3 pl-2 py-1 bg-inputcolor outline-none' />
        {poserr ? <Error text='Please enter a position' /> : ''}
        <label>Status</label>
        <input type="text" value={status} onChange={(e: ChangeEvent<HTMLInputElement>) => setStatus(e.target.value)} className='my-3 pl-2 py-1 bg-inputcolo outline-none' />
        {staterr ? <Error text='Please enter a status' /> : ''}
        {stateenum ? <Error text='Please enter one of [interview,declined,pending]' /> : ''}
        <TextButton text='Edit' onClick={handleSubmit} />
      </form>
    </div>
  )
}

export default EditForm
