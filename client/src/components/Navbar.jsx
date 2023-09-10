import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='lg:flex justify-between bg-green-400 px-4' >
        <div className='px-2 lg:py-4'>
            University
        </div>

        {/* Links */}
        <div className='flex flex-row'>

            <div className='px-2 lg:py-4 hover:pb-0 font-bold cursor-pointer hover:text-red-500 hover:border-b-4 hover:border-red-500'> <Link to="/home">Home</Link>        </div>
            <div className='px-2 lg:py-4 hover:pb-0 font-bold cursor-pointer hover:text-red-500 hover:border-b-4 hover:border-red-500'> <Link to="/courses">Courses</Link>  </div>
            <div className='px-2 lg:py-4 hover:pb-0 font-bold cursor-pointer hover:text-red-500 hover:border-b-4 hover:border-red-500'> <Link to="/about">About</Link>       </div>
            <div className='px-2 lg:py-4 hover:pb-0 font-bold cursor-pointer hover:text-red-500 hover:border-b-4 hover:border-red-500'> <Link to="/services">Services</Link> </div>
            <div className='px-2 lg:py-4 hover:pb-0 font-bold cursor-pointer hover:text-red-500 hover:border-b-4 hover:border-red-500'> <Link to="/contact">Contact</Link>    </div>

        </div>
    </div>
  )
}
