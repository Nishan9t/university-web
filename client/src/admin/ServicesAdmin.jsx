import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function ServicesAdmin() {

  const navigate=useNavigate()

   const [title,setTitle]=useState("")
   const [desc,setDesc]=useState("")
   const [image,setImage]=useState('')

   useEffect(()=>{
      if(!localStorage.getItem('token')){
        navigate('/home')
      }
   },[])

   const handleSubmit=async()=>{

    const formData= new FormData()
    formData.append('title',title)
    formData.append('description',desc)
    formData.append('image',image)


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
        setImage('')
        alert(res.data.message);
        navigate('/services');

      }).catch(err=>{
        console.log(err)
      })

     
   }


  return (
    <div className='flex flex-col w-1/2 justify-center align-center mx-auto shadow-xl mt-4 mb-36 p-4'>
      <input type='text' className='m-4  border border-2 hover:border-green-200 p-2 rounded-lg' placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
      <textarea className='m-4 h-36  border border-2 hover:border-green-200 p-2 rounded-lg' placeholder='Description' value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
      <input type='file' className='m-4  border border-2 hover:border-green-200 p-2 rounded-lg' onChange={(e)=>setImage(e.target.files[0])}></input>
      
      <button className='border w-32 border-2 border-green-200 rounded-lg p-2 hover:bg-green-200 self-center' onClick={(e)=>handleSubmit()}>ADD SERVICE</button>
    </div>
  )
}
