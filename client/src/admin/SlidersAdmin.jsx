import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function AboutsAdmin() {

  const navigate=useNavigate()

   const [link1,setLink1]=useState("")
   const [link2,setLink2]=useState("")
   const [link3,setLink3]=useState("")
   
  


   useEffect(()=>{
      if(!localStorage.getItem('token')){
        navigate('/home')
      }
   },[])

  
   const handleSubmit=async()=>{
      await axios.post('http://localhost:8000/api/sliders',
      {
        link1,
        link2,
        link3
      },
      {
        headers:{'authorization':localStorage.getItem('token')}
      }).then((res)=>{
        if(res.data.code ===403 && res.data.message==="token expire")
        {
          localStorage.setItem('token',null)
        }
        setLink1("")
        setLink2("")
        setLink3("")
       
       
        alert(res.data.message);
        navigate("/home")

      }).catch(err=>{
        console.log(err)
      })

     
   }


  return (
    <div className='flex flex-col w-1/2 justify-center align-center mx-auto shadow-xl mt-4 mb-36 p-4'>
      <input type='text' className='m-4  border border-2 hover:border-green-200 p-2 rounded-lg' placeholder='Link 1' value={link1} onChange={(e)=>setLink1(e.target.value)}></input>
      <input type='text' className='m-4  border border-2 hover:border-green-200 p-2 rounded-lg' placeholder='Link 2' value={link2} onChange={(e)=>setLink2(e.target.value)}></input>
      <input type='text' className='m-4  border border-2 hover:border-green-200 p-2 rounded-lg' placeholder='Link 3' value={link3} onChange={(e)=>setLink3(e.target.value)}></input>
      
      <button className='border w-32 border-2 border-green-200 rounded-lg p-2 hover:bg-green-200 self-center' onClick={(e)=>handleSubmit()}>ADD SLIDES</button>
    </div>
  )
}
