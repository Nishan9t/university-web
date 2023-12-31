import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Footer from './Footer'

import { useDispatch, useSelector } from 'react-redux';
import {getServices} from "../reducers/serviceReducer";

export default function Services() {

  const dispatch=useDispatch()

  const state =useSelector(state =>state.serviceReducer)
  console.log(state)

  // const [data,setData]=useState([]);
  const [filter,setFilter]= useState('')

useEffect(()=>{
  // axios.get('http://localhost:8000/api/services')
  // .then(res=>{
  //   console.log(res.data)
  //   setData(res.data.data)
  // })
  // .catch(err=>{
  //   console.log(err);
  // })

  dispatch(getServices()) ;
},[])

  return (
  <div className='mb-36'>
        <div className='flex justify-end items-center'>
        
        <input type="text" className='border border-2 p-1 m-2 border-black w-80 rounded-sm' placeholder='Title' value={filter} onChange={(e)=>setFilter(e.target.value)}></input>
        </div>

      {
        state.isLoading && <h1 className='text-center'>LOADING...</h1>
      }
    <div className='lg:flex-wrap md:flex  justify-center'>
    {
      state &&
      state.servicesData &&
      state.servicesData.length > 0? 
      state.servicesData
      .sort((a,b)=>a.title.toLowerCase() > b.title.toLowerCase()? 1: -1)
      .filter((item)=>{
        return item.title.toLowerCase().includes(filter.toLocaleLowerCase())
      })
      .map((serviceItem)=>{
        return(
          <div key={serviceItem._id} className=' border-2 border-solid p-2  mx-8 my-4 h-80 lg:w-1/4 sm:w-full md:w-full shadow-lg rounded-md overflow-hidden'>
            <img className='w-full h-1/2' src={`https://university-server-5nor.onrender.com/${serviceItem?.imageUrl}`} />
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
