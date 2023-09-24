import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getServices } from '../reducers/serviceReducer'
import { AiFillDelete } from 'react-icons/ai'


export default function ServicesAdmin() {

  const navigate=useNavigate()
  const dispatch=useDispatch()

  const state=useSelector(state=>state.serviceReducer)

   const [title,setTitle]=useState("")
   const [desc,setDesc]=useState("")
   const [image,setImage]=useState("")


   useEffect(()=>{
      if(!localStorage.getItem('token')){
        navigate('/home')
      }
   },[])

   useEffect(()=>{
        dispatch(getServices())
   },[])

   const formData = new FormData();
   formData.append('title',title)
   formData.append('description',desc)
   formData.append('image',image)

   const handleSubmit=async()=>{
      await axios.post('http://localhost:8000/api/services',
      formData,
      {
        headers:{'authorization':localStorage.getItem('token')}
      }).then((res)=>{
        if(res.data.code ===403 && res.data.message==="token expire")
        {
          localStorage.setItem('token',null)
        }
        setTitle("");
        setDesc("");
        setImage("")
        alert(res.data.message);
        navigate("/services")

      }).catch(err=>{
        console.log(err)
      })

     
   }


   const handleDelete=async(id)=>{

    await axios.delete(`http://localhost:8000/api/services/delete/${id}`,
      {
        headers:{'authorization':localStorage.getItem('token')}
      }).then((res)=>{
        if(res.data.code ===403 && res.data.message==="token expire")
        {
          localStorage.setItem('token',null)
        }
        alert(res.data.message)
        navigate("/about")

      }).catch(err=>{
        console.log(err)
      })

   }


  return (
    <div className='mb-36 '>
          <div className='flex flex-col w-1/2 justify-center align-center mx-auto shadow-xl mt-4 p-4'>
            <input type='text' className='m-4  border border-2 hover:border-green-200 p-2 rounded-lg' placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            
            <textarea className='m-4 h-36  border border-2 hover:border-green-200 p-2 rounded-lg' placeholder='Description' value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
            <input type='file' className='m-4  border border-2 hover:border-green-200 p-2 rounded-lg' onChange={(e)=>setImage(e.target.files[0])}></input>
            
            <button className='border w-32 border-2 border-green-200 rounded-lg p-2 hover:bg-green-200 self-center' onClick={(e)=>handleSubmit()}>ADD SERVICE</button>
          </div>
          <div className='lg:flex-wrap md:flex  justify-center'>
          {
            state &&
            state.servicesData &&
            state.servicesData.length > 0? 
            state.servicesData
            .sort((a,b)=>a.title.toLowerCase() > b.title.toLowerCase()? 1: -1)
            .map((serviceItem)=>{
              return(
                <div key={serviceItem._id} className=' border-2 border-solid pt-2 pl-2 pr-2  mx-8 my-4 h-80 lg:w-1/4 sm:w-full md:w-full shadow-lg rounded-md overflow-hidden'>
                  <img className='w-full h-1/2' src={`http://localhost:8000/${serviceItem?.imageUrl}`} />
                  <div className='font-bold text-lg capitalize mb-2 underline'>{serviceItem.title}</div>
                  <div className='mb-4'>{serviceItem.description}</div>

                  <div className='px-4 hover:text-red-500 text-4xl hover:scale-125 text-center'>
                    <button className='' onClick={()=>handleDelete(serviceItem._id)} ><AiFillDelete /></button>
                  </div>
                </div>
              )
            })
            :'no data found'
          }

    </div>
    </div>
  )
}
