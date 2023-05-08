
import React, { useState } from 'react'

import Header from '../components/Header'
import AddForm from '../components/AddForm'
import Layout from '../components/Jobs/Layout'
import EditForm from '../components/EditForm'

import { edit } from '../context/updateJob'

const DashBoard = () => {

  const [isEdit, setIsEdit] = useState('sas')

  return (
    <div>
      <edit.Provider value={[isEdit, setIsEdit]}>
        {isEdit ?
          <div>
            <Header />
            <EditForm />
          </div>
          :
          <div>
            <Header />
            <AddForm />
            <Layout />
          </div>
        }
      </edit.Provider>
    </div >
  )
}

export default DashBoard
