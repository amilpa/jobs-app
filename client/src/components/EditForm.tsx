
import React, { FC } from 'react'
import TextButton from './Buttons/TextButton'

type Props = {
  isEdit: string
}

const EditForm: FC<Props> = ({ isEdit }) => {


  return (
    <div className='w-[500px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-4'>
      <form className='flex flex-col mb-1'>
        <label>Company</label>
        <input type="text" className='my-3 pl-2 py-1 bg-inputcolor outline-none' />
        <label>Position</label>
        <input type="text" className='my-3 pl-2 py-1 bg-inputcolor outline-none' />
        <label>Status</label>
        <input type="text" className='my-3 pl-2 py-1 bg-inputcolo outline-none' />
        <TextButton text='Edit' />
      </form>
    </div>
  )
}

export default EditForm
