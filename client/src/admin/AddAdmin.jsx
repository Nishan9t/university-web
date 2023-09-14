import React from 'react'

export default function AddAdmin() {
  return (
    <div className='mx-auto text-center mt-4  mb-36 '>
        <h1 className='bold text-2xl'>ADD ADMIN</h1>
    <div className='flex flex-col w-1/2 justify-center align-center mx-auto shadow-xl p-4'>
      <input type='text' className='m-4  border border-2 hover:border-green-200 p-2 rounded-lg' placeholder='username'></input>
      <input type='password' className='m-4  border border-2 hover:border-green-200 p-2 rounded-lg' placeholder='password'></input>
      <div className='flex flex-col mx-auto'>
      <select className='w-80 text-center border border-2 m-2 rounded-lg bg-gray-400'>
        <option>ACTIVE</option>
        <option>BLOCK</option>
        <option>DELETE</option>
      </select>
      <select className='w-80 text-center border border-2 m-2 rounded-lg bg-gray-400'>
        <option>ADMIN</option>
        <option>SUBADMIN</option>
      </select>
      </div>
      <button className='border w-32 border-2 border-green-200 rounded-lg p-2 hover:bg-green-200 self-center'>ADD</button>
    </div>
    </div>
  )
}
