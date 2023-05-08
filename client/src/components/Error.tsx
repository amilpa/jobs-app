
import React, { FC } from 'react'

type Props = {
  text: string
}

const Error: FC<Props> = ({ text }) => {
  return (
    <span className='text-red-500'>{text}</span>
  )
}

export default Error
