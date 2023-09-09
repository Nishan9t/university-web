import React from 'react'

export default function Navbar() {
  return (
    <div className='flex flex-row justify-between bg-green-400 p-4' >
        <div>
            Univeristy
        </div>

        {/* Links */}
        <div className='flex flex-row'>

            <div className='pl-4 cursor-pointer hover:text-red-500'>Home</div>
            <div className='pl-4 cursor-pointer hover:text-red-500'>About</div>
            <div className='pl-4 cursor-pointer hover:text-red-500'>Courses</div>
            <div className='pl-4 cursor-pointer hover:text-red-500'>Services</div>
            <div className='pl-4 cursor-pointer hover:text-red-500'>Contact</div>

        </div>
    </div>
  )
}
