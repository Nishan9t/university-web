import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Students() {
  const {id}=useParams();
  const [student,setStudent]=useState([])

  const getStudent=async()=>{
      await axios.get(`http://localhost:8000/api/course/students/${id}`)
      .then((res)=>{
        setStudent(res.data.data)
        
      })
      .catch((err)=>{
        console.log(err);
      })
      
  }

  useEffect(()=>{
    getStudent();

  },[])
  return (
    <div>
    
      {
        student?
        student.map((stud)=>
        (<div className='flex justify-center mx-auto w-1/2'>
          <h1 className='font-bold mx-2'>Name : {stud.name}</h1>
          <h1 className='font-bold mx-2'>Roll No : {stud.roll}</h1>
          </div>
        ))
        :<p>no data found</p>
      }
    </div>
  )
}
