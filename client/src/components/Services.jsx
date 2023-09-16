import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Footer from './Footer'

export default function Services() {

  const [data,setData]=useState([]);
  const [filter,setFilter]= useState('')

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
  <div className='mb-36'>
        <div className='flex justify-end items-center'>
        
        <input type="text" className='border border-2 p-1 m-2 border-black w-80 rounded-sm' placeholder='Title' value={filter} onChange={(e)=>setFilter(e.target.value)}></input>
        </div>
    <div className='lg:flex-wrap md:flex  justify-center'>
    {
      data.length > 0? 
      data
      .sort((a,b)=>a.title.toLowerCase() > b.title.toLowerCase()? 1: -1)
      .filter((item)=>{
        return item.title.toLowerCase().includes(filter.toLocaleLowerCase())
      })
      .map((serviceItem)=>{
        return(
          <div key={serviceItem._id} className=' border-2 border-solid p-2  mx-8 my-4 h-80 lg:w-1/4 sm:w-full md:w-full shadow-lg rounded-md overflow-hidden'>
            <div className='font-bold text-lg capitalize mb-2 underline'>{serviceItem.title}</div>
            <div className=''>{serviceItem.description}</div>
          </div>
        )
      })
      :'no data found'
    }

    </div>
    </div>

  
  )
}
