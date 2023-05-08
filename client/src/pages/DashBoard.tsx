
import React, { useState } from 'react'

import Header from '../components/Header'
import AddForm from '../components/AddForm'
import Layout from '../components/Jobs/Layout'
import EditForm from '../components/EditForm'

import { edit } from '../context/updateJob'
import { editJob } from '../context/updateJob'

const DashBoard = () => {

  const [isEdit, setIsEdit] = useState<editJob>({} as editJob)


  return (
    <div>
      <edit.Provider value={[isEdit, setIsEdit]}>
        {isEdit._id ?
          <div>
            <Header />
            <EditForm editJob={isEdit} />
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
