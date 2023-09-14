import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddAdmin() {

    const navigate =useNavigate()

    const [userName,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const [status , setStatus]=useState("")
    const [type,setType]=useState("")

    const handleClick=()=>{
        if((status===''|| status==='STATUS')|| (type==="" || type==="TYPE" ))
        {
            alert("please select STATUS and TYPE ");
            
        }
        else{
            console.log(userName,password,type,status)

        axios.post('http://localhost:8000/admin/add',{
            userName : userName,
            password:password,
            status:status,
            type:type,
            date:new Date()
        }).then((res)=>{
            console.log(res.data);
            setUserName('')
            setPassword('');
            setStatus("STATUS");
            setType("TYPE");

            navigate("/admin/list")
        }).catch(err=>{
            console.log(err);
        })
        }
        
    }

  return (
    <div className='mx-auto text-center mt-4  mb-36 '>
        <h1 className='bold text-2xl'>ADD ADMIN</h1>
    <div className='flex flex-col w-1/2 justify-center align-center mx-auto shadow-xl p-4'>
      <input value={userName} onChange={(e)=>setUserName(e.target.value)} type='text' className='m-4  border border-2 hover:border-green-200 p-2 rounded-lg' placeholder='username'></input>
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' className='m-4  border border-2 hover:border-green-200 p-2 rounded-lg' placeholder='password'></input>
      <div className='flex flex-col mx-auto'>
      <select value={status} onChange={(e)=>setStatus(e.target.value)} className='w-80 text-center border border-2 m-2 rounded-lg bg-gray-400'>
        <option>STATUS</option>
        <option>ACTIVE</option>
        <option>BLOCK</option>
        <option>DELETE</option>
      </select>
      <select value={type} onChange={(e)=>setType(e.target.value)} className='w-80 text-center border border-2 m-2 rounded-lg bg-gray-400'>
        <option>TYPE</option>
        <option>ADMIN</option>
        <option>SUBADMIN</option>
      </select>
      </div>
      <button onClick={handleClick} className='border w-32 border-2 border-green-200 rounded-lg p-2 hover:bg-green-200 self-center'>ADD</button>
    </div>
    </div>
  )
}
