import React from 'react'
import {FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaYoutube} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div>
        <div>
            <a><FaFacebookSquare/></a>
            <a><FaInstagramSquare/></a>
            <a><FaTwitterSquare/></a>
            <a><FaYoutube/></a>
        </div>
        
        <div>
            <Link to="/home">University ABC</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
        </div>

    </div>
  )
}
