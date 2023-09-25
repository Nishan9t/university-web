import React from 'react'
import {FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaYoutube} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div className='flex flex-col bg-green-500 h-36 w-full mx-auto items-center justify-center fixed bottom-0 '>
        <div className='flex '>
            <a><FaFacebookSquare  className='mx-4 text-2xl' /></a>
            <a><FaInstagramSquare className='mx-4 text-2xl' /></a>
            <a><FaTwitterSquare   className='mx-4 text-2xl' /></a>
            <a><FaYoutube         className='mx-4 text-2xl'  /></a>
        </div>
        
        <div className='my-4'>
            <Link className='mx-2 hover:border-b-2 ' to="/">University ABC</Link>
            <Link className='mx-2 hover:border-b-2 ' to="/about">About Us</Link>
            <Link className='mx-2 hover:border-b-2 ' to="/contact">Contact Us</Link>
        </div>

    </div>
  )
}
