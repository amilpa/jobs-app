
import React from 'react'
import { Link } from 'react-router-dom'

const Restrict = () => {
  return (
    <div>
      <h1>This area is restricted</h1>
      <Link to={'/'}>Go to home</Link>L
    </div>
  )
}

export default Restrict
