

import React from 'react'

interface Props {
  heading: string,
  form_type: string,
  button_text: string
}

const RegisterForm: React.FC<Props> = ({ heading, form_type, button_text }) => {

  let array = ['Email', 'Password']

  if (form_type === 'register') {
    array = ['Name', 'Email', 'Password']
  }

  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg bg-teritiary py-5 px-3 rounded-lg'>
      <form>
        <h1 className='text-center text-2xl font-semibold'>{heading}</h1>
        {array.map((value) => {
          return (
            <div className='flex gap-2 flex-col w-[400px] my-2'>
              <label className='text-xl'>{value}</label>
              <input type="password" className='border-[1px] rounded-s pl-2 py-2' />
            </div>
          )
        })}
        <button type='submit' className='w-full text-xl bg-primary text-teritiary font-semibold py-1 rounded-s mt-3'>{button_text}</button>
      </form>
    </div>
  )
}

export default RegisterForm
