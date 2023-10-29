import React from 'react'
import Footer from './Footer'
import Carousel from './Carousel'
import Services from './Services'
import { Link } from 'react-router-dom'

import '../App.css'


export default function Home() {
  return (
   
      <div className='mb-36'>
          {/* <div className='animate text-blue-400'>
            <Link to='/posts'>Latest Post</Link>
          </div> */}

          <div className=''>
             <Carousel/>
             <Services/>
          </div>
         
      </div>

     
   
  )
}
