
import React from 'react'

interface Props {
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
  text: string
}

const FormButton: React.FC<Props> = ({ handleSubmit, text }) => {
  return (
    < button type='submit' className='w-full text-lg bg-primary text-teritiary font-semibold py-1 rounded-s mt-3' onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(e)} >{text}</button >
  )
}

export default FormButton
