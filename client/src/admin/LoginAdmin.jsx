import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginAdmin() {

    const navigate =useNavigate()

    const [userName,setUserName]=useState("")
    const [password,setPassword]=useState("")
   
    const handleClick=()=>{
     

        axios.post('http://localhost:8000/admin/login',{
            userName : userName,
            password:password,
           
        }).then((res)=>{
            console.log(res.data);
            
            setUserName('')
            setPassword('');

            localStorage.setItem('type',res.data.type)
            localStorage.setItem('token',res.data.token)
          
            navigate("/admin/dashboard")
        }).catch(err=>{
            console.log(err);
        })
        
        
    }

  return (
    <div className='mx-auto text-center mt-4  mb-36 '>
        <h1 className='bold text-2xl'>LOGIN ADMIN</h1>
    <div className='flex flex-col w-1/2 justify-center align-center mx-auto shadow-xl p-4'>
      <input value={userName} onChange={(e)=>setUserName(e.target.value)} type='text' className='m-4  border border-2 hover:border-green-200 p-2 rounded-lg' placeholder='username'></input>
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' className='m-4  border border-2 hover:border-green-200 p-2 rounded-lg' placeholder='password'></input>
      
      <button onClick={handleClick} className='border w-32 border-2 border-green-200 rounded-lg p-2 hover:bg-green-200 self-center'>Login</button>
    </div>
    </div>
  )
}
