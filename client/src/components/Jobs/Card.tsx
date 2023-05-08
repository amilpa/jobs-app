
import React, { FC, useContext } from 'react'

import { job } from './Layout'
import { getToken, clearToken } from '../../utils/authCookie'

import { auth } from '../../context/auth'
import { edit, editJob } from '../../context/updateJob'

import axios from 'axios'

type Props = {
  Job: job
}

const Card: FC<Props> = (props) => {

  const setAuthenticated = useContext(auth)[1]
  const setIsEdit = useContext(edit)[1]

  const deleteRecord = async () => {
    try {
      console.log(`${import.meta.env.VITE_BACKEND_URL}/api/v1/jobs/${props.Job._id}`)
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/v1/jobs/${props.Job._id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      window.location.reload()
    } catch (error) {
      // console.log(error.message)
      clearToken()
      setAuthenticated(false)
    }
  }

  const updateRecord = () => {
    setIsEdit({
      _id: props.Job._id,
      company: props.Job.company,
      position: props.Job.position,
      status: props.Job.status
    })
  }

  return (
    <div className='w-[300px] bg-white rounded-md shadow-lg transition-all hover:-translate-y-2'>
      <p className='flex justify-end'><span className='bg-bookmarkcolor text-[0.7rem] font-semibold text-[#3d2c47] py-1 px-2 rounded-l-md'>{props.Job.createdAt.toDateString()}</span></p>
      <p className='text-lg font-semibold pl-3'>{props.Job.position}</p>
      <p className='inline-block text-sm text-[#626466] lowercase ml-3 mt-2 px-2 pb-1 bg-[#dde1e7] rounded-sm'>{props.Job.company}</p>
      <div className='flex justify-between my-3'>
        <div className='ml-3 flex gap-4'>
          <button className='text-sm text-[#606964] bg-[#e7e8e7] w-[50px] rounded-sm' onClick={updateRecord}>Edit</button>
          <button className='text-sm text-[#e27386] bg-[#ffece1] w-[50px] rounded-sm' onClick={deleteRecord}>Delete</button>
        </div>
        <p className='text-sm text-primary mr-2'>{props.Job.status}</p>
      </div>
    </div>
  )
}

export default Card
