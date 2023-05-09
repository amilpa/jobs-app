
import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'

import axios from 'axios'

import { getToken, clearToken } from '../../utils/authCookie'
import { auth } from '../../context/auth'

import { parseData, jobData } from '../../utils/parseRes'

export type job = {
  company: string,
  createdAt: Date,
  createdBy: string,
  position: string,
  status: string,
  updatedAt: Date,
  _v: number,
  _id: string

}

const Layout = () => {

  const setIsAuthenticated = useContext(auth)[1]

  const [jobs, setJobs] = useState<job[]>([])

  const token = getToken()


  useEffect(() => {
    axios.get(`/api/v1/jobs`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        const parsed = res.data.map((value: jobData) => {
          return parseData(value)
        })
        setJobs(parsed)
      })
      .catch((error) => {
        if (error.response.status === 401) {
          clearToken()
          setIsAuthenticated(false)
        }
      })
  }, [setIsAuthenticated, token])

  return (
    <div className='absolute w-full top-[70%] md:top-[80%]'>
      <div className='grid grid-cols-1 md:grid-cols-3 place-items-center mb-8 gap-y-8'>
        {jobs.map((value: job) => {
          return (
            <Card key={value._id} Job={value} />
          )
        })}
      </div>
    </div>
  )
}

export default Layout
