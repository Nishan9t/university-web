import axios from 'axios'
import React, { useState } from 'react'


export default function ServicesAdmin() {

 

   const [title,setTitle]=useState("")
   const [desc,setDesc]=useState("")

   const handleSubmit=async()=>{
      const res = await axios.post('http://localhost:8000/api/services',{
        title:title,
        description:desc
      })

      if(res.data)
      {
       
        setTitle("");
        setDesc("");
        alert(res.data.message);
      }

   }


  return (
    <div className='flex flex-col w-1/2 justify-center align-center mx-auto shadow-xl mt-4 mb-36 p-4'>
      <input className='m-4  border border-2 hover:border-green-200 p-2 rounded-lg' placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
      <textarea className='m-4 h-36  border border-2 hover:border-green-200 p-2 rounded-lg' placeholder='Description' value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
      <button className='border w-32 border-2 border-green-200 rounded-lg p-2 hover:bg-green-200 self-center' onClick={(e)=>handleSubmit()}>ADD SERVICE</button>
    </div>
  )
}