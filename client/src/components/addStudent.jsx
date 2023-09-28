import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function AddStudent() {

  const {id}=useParams();
  

    const [name,setName]=useState('');
    const [roll,setRoll]=useState(0);


  const navigate=useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/home')
    }
 },[])

 
  const handleSubmit=async()=>{
  
    await axios.post(`http://localhost:8000/api/course/student/${id}`,
    {
      name,
      roll,
      courseId:id,
    },
    {
      headers:{'authorization':localStorage.getItem('token')}
    }).then((res)=>{
      if(res.data.code ===403 && res.data.message==="token expire")
      {
        localStorage.setItem('token',null)
      }
      setName("");
      setRoll("");
      
      alert(res.data.message);
      navigate("/admin/student")

    }).catch(err=>{
      console.log(err)
    })

   
 }

 const handleForm=(e)=>{
  e.preventDefault();
  console.log(e)

 }

 

  return (
    <div className='mb-36'>
        <div className='flex flex-col items-center border border-2 shadow-lg w-1/2 mx-auto m-4'>
        <h1 className="text-center font-bold">ADD STUDENT</h1><br/>
        <input type='text' className='border border-2 m-2 p-2 rounded-lg' onChange={(e)=>{setName(e.target.value)}} placeholder='Name'></input>
        <input type='number' className='border border-2 m-2 p-2 rounded-lg' onChange={(e)=>{setRoll(e.target.value)}} placeholder='Roll No'></input>
        <button className="border w-16 mb-2 border-2 border-green-200 rounded-lg p-2 hover:bg-green-200 self-center " onClick={(e)=>handleSubmit()}>Add</button>
        </div>
        <h1 className='font-bold text-3xl text-center w-1/2 mx-auto m-4'> OR </h1>
        <div className='items-center border border-2 shadow-lg w-1/2 mx-auto m-4'>
          <form className='text-center' onSubmit={(e)=>handleForm(e)}>
            <input type='file' name="" accept=".xlsx, .xls" className='border border-2 m-2 p-2 rounded-lg' onChange={(e)=>e.target.name=e.target.files[0].name} placeholder=''/>
            <button type="submit" className="border w-16 mb-2 border-2 border-green-200 rounded-lg p-2 hover:bg-green-200 self-center " >ADD</button>
            <p className='text-gray-500'>Select excel file with Student Name and Roll</p>
          </form>
        </div>
    </div>
  )
}
