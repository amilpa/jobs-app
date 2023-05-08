
import React, { FC } from 'react'

type Props = {
  text: string
}

const ErrorCenter: FC<Props> = ({ text }) => {
  return (
    <span className='block text-red-500 text-center'>{text}</span>
  )
}

export default ErrorCenter
