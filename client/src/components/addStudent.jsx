import React from 'react'

export default function AddStudent() {
  return (
    <div className='flex flex-col items-center border border-2 shadow-lg w-1/2 mx-auto m-4'>
        <h1 className="text-center font-bold">ADD STUDENT</h1><br/>
        <input type='text' className='border border-2 m-2 p-2 rounded-lg' placeholder='Name'></input>
        <input type='number' className='border border-2 m-2 p-2 rounded-lg' placeholder='Roll No'></input>
        <button class="border w-16 mb-2 border-2 border-green-200 rounded-lg p-2 hover:bg-green-200 self-center " >Add</button>
    </div>
  )
}
