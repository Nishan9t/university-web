import React, { useState } from 'react'

export default function ServicesAdmin() {

   const [title,setTitle]=useState("")
   const [desc,setDesc]=useState("")

   const handleSubmit=()=>{
    console.log(title,desc)
   }


  return (
    <div className='flex flex-col w-1/2 justify-center align-center mx-auto shadow-lg m-4 p-4'>
      <input className='m-4  border border-2 hover:border-green-200 p-2 rounded-lg' placeholder='Title' onChange={(e)=>setTitle(e.target.value)}></input>
      <input className='m-4  border border-2 hover:border-green-200 p-2 rounded-lg' placeholder='Description' onChange={(e)=>setDesc(e.target.value)}></input>
      <button className='border w-32 border-2 border-green-200 rounded-lg p-2 hover:bg-green-200 self-center' onClick={(e)=>handleSubmit()}>ADD SERVICE</button>
    </div>
  )
}
