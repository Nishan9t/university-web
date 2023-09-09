import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex flex-row justify-between bg-green-400 p-4' >
        <div>
            Univeristy
        </div>

        {/* Links */}
        <div className='flex flex-row'>

            <div className='pl-4 cursor-pointer hover:text-red-500'> <Link to="/home">Home</Link>        </div>
            <div className='pl-4 cursor-pointer hover:text-red-500'> <Link to="/courses">Courses</Link>  </div>
            <div className='pl-4 cursor-pointer hover:text-red-500'> <Link to="/about">About</Link>       </div>
            <div className='pl-4 cursor-pointer hover:text-red-500'> <Link to="/services">Services</Link> </div>
            <div className='pl-4 cursor-pointer hover:text-red-500'> <Link to="/contact">Contact</Link>    </div>

        </div>
    </div>
  )
}
