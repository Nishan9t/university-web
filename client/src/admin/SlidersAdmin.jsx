import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function AboutsAdmin() {

  const navigate=useNavigate()

   const [link1,setLink1]=useState("")
  
   
  


   useEffect(()=>{
      if(!localStorage.getItem('token')){
        navigate('/home')
      }
   },[])

  
   const handleSubmit=async()=>{
      await axios.post('http://localhost:8000/api/slider',
      {
        link1,
       
      },
      {
        headers:{'authorization':localStorage.getItem('token')}
      }).then((res)=>{
        if(res.data.code ===403 && res.data.message==="token expire")
        {
          localStorage.setItem('token',null)
        }
        setLink1("")
      
       
       
        alert(res.data.message);
        navigate("/")

      }).catch(err=>{
        console.log(err)
      })

     
   }


  return (
    <div className='flex flex-col w-1/2 justify-center align-center mx-auto shadow-xl mt-4 mb-36 p-4'>
      <input type='text' className='m-4  border border-2 hover:border-green-200 p-2 rounded-lg' placeholder='Link 1' value={link1} onChange={(e)=>setLink1(e.target.value)}></input>
        <p className='text-sm text-gray-400 text-center pb-2'>Note: image should be of width:1550px and height:550px</p>
      <button className='border w-32 border-2 border-green-200 rounded-lg p-2 hover:bg-green-200 self-center' onClick={(e)=>handleSubmit()}>ADD SLIDES</button>
    </div>
  )
}
