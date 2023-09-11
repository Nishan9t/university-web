import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Footer from './Footer'

export default function Services() {

  const [data,setData]=useState([])

useEffect(()=>{
  axios.get('http://localhost:8000/api/services')
  .then(res=>{
    console.log(res.data)
    setData(res.data.data)
  })
  .catch(err=>{
    console.log(err);
  })
})

  return (
  
    <div className='lg:flex-wrap md:flex mb-36 '>
    {
      data.length > 0? 
      data.map((serviceItem)=>{
        return(
          <div key={serviceItem._id} className='border border-2 border-solid p-2  mx-8 my-4 h-80 lg:w-80 sm:w-full md:w-full shadow-lg text-center rounded-md'>
            <div className='font-bold text-lg capitalize'>{serviceItem.title}</div>
            <div className=''>{serviceItem.description}</div>
          </div>
        )
      })
      :'no data found'
    }

    </div>

  
  )
}
