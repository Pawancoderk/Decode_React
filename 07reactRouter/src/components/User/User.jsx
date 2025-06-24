import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
  const {userid} = useParams()
  return (
    <div className='bg-gray-500 text-white p-4 text-center text-2xl text-shadow-blue-50'>User: {userid}</div>
  )
}

export default User