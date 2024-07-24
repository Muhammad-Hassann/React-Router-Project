import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='w-[80%] m-auto mt-4 mb-4 font-extrabold tracking-tight bg-gray-100 text-black text-3xl p-4 text-center'>
      User: {id}
    </div>
  )
}

export default User
