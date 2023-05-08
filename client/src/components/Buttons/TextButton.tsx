
import React, { type MouseEvent } from 'react'

interface Props {
  text: string,
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

const TextButton: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button type='submit' onClick={onClick} className='text-center font-medium w-full bg-primary text-teritiary rounded-s py-1 mt-2'>
      {text}
    </button>
  )
}

export default TextButton
