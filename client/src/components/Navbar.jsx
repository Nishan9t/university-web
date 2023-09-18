import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {

  const navigate=useNavigate()
  const type=localStorage.getItem('type')
  const token=localStorage.getItem('token')
  useEffect(()=>{

  },[type,token])
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
            {
              localStorage.getItem('token') &&
              <div className='px-2 lg:py-4 hover:pb-0 font-bold cursor-pointer hover:text-red-500 hover:border-b-4 hover:border-red-500'> <Link to="/admin/services">Add Services</Link>    </div>
            }
            {
              localStorage.getItem('token') &&
              <div className='px-2 lg:py-4 hover:pb-0 font-bold cursor-pointer hover:text-red-500 hover:border-b-4 hover:border-red-500'> <Link to="/admin/courses">Add Courses</Link>    </div>
            }
            {
              localStorage.getItem('token') && localStorage.getItem('type')==='ADMIN'?
              <div className='px-2 lg:py-4 hover:pb-0 font-bold cursor-pointer hover:text-red-500 hover:border-b-4 hover:border-red-500'> <Link to="/admin/list">Admin List</Link>    </div>
              :
              <></>
            }
            {
              localStorage.getItem('token') ?
              <button className='border w-20 border-2 m-2  bg-blue-500 rounded-lg p-2 hover:bg-green-200' onClick={()=>{
                localStorage.clear()
                navigate('/admin/dashboard')
              }}>Logout</button>
              :
              <button className='border w-20 border-2 m-2  bg-blue-500 rounded-lg p-2 hover:bg-green-200' onClick={()=>{
                navigate('/admin/login')
              }}>Login</button>
            }

        </div>
    </div>
  )
}
