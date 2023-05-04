
import React from 'react'

interface Props {
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const FormButton: React.FC<Props> = ({ handleSubmit }) => {
  return (
    < button type='submit' className='w-full text-xl bg-primary text-teritiary font-semibold py-1 rounded-s mt-3' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSubmit(e)} > Login</button >
  )
}

export default FormButton
