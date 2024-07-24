import React from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData()
    console.log(data);
  return (
    <div className='flex flex-col items-center justify-center w-full mt-4 mb-4 bg-gray-100 text-black text-3xl p-4 text-center'>
      <h1 className='font-extrabold tracking-tight'>GitHub Followers: {data.followers}</h1>
      <img className="w-80 mt-4 rounded-md" src={data.avatar_url} alt="" />
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Muhammad-Hassann')
    return response.json()
}
