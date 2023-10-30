import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';


export default function ListAdmins() {

    const navigate=useNavigate()

    const [admins,setAdmins]=useState([]);

    useEffect(()=>{
        axios.get("https://university-server-5nor.onrender.com/admin/admins")
        .then((res)=>{
            console.log(res.data);
            setAdmins(res.data.data)
        }).catch((err)=>{
            console.log(err);
        })

    },[admins])

    useEffect(()=>{
        if(localStorage.getItem('type')!=="ADMIN")
        {
            navigate('/admin/dashboard')
        }
    },[])


    const handleDelete=async(id)=>{

        await axios.delete(`https://university-server-5nor.onrender.com/admin/delete/${id}`,
          {
            headers:{'authorization':localStorage.getItem('token')}
          }).then((res)=>{
            if(res.data.code ===403 && res.data.message==="token expire")
            {
              localStorage.setItem('token',null)
            }
            alert(res.data.message)
            navigate("/admin/list")
    
          }).catch(err=>{
            console.log(err)
          })
    
       }

  return (
    <div className='mb-36'>
        <div className='w-full mx-auto text-center'>
        <button  className='border w-32 border-2 m-2  bg-blue-500 rounded-lg p-2 hover:bg-green-200'><Link to="/admin/add">ADD ADMIN</Link></button>
        </div>
        {
            admins.length>0
            ?
           admins.map((user,index)=>{
            return(
                <div key={index} className='flex flex-col flex-wrap '>
                <div className='p-2 m-4 shadow-lg'>
                    <h1>{user.userName}</h1>
                    <p>{user.type}</p>
                    <p>{user.status}</p>
                    <p>{user.date}</p>
                    {
                        localStorage.getItem('type')==='ADMIN' && user.type !=='ADMIN' &&
                        <button className='px-4 hover:text-red-500 text-2xl hover:scale-125 text-center' onClick={()=>handleDelete(user._id)} ><AiFillDelete /></button>
                    }
                    
                </div>
                </div>
            )
           })
            :
            "no admins"
        }
    </div>
  )
}
