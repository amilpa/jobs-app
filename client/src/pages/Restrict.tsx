
import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'

const Restrict = () => {
  return (
    <div>
      <Header />
      <div className='absolute top-[45%] left-1/2 w-[300px] bg-white -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg shadow-lg'>
        <h1 className=' text-center text-xl font-semibold'>It seems you have not logged in properly<br />Please login again</h1>
        <Link to={'/login'} className='block mt-3 text-center font-semibold text-lg text-primary underline'>Go to login</Link>
      </div>
    </div>
  )
}

export default Restrict
