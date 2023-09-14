import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export default function ListAdmins() {

    const [admins,setAdmins]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/admin/admins")
        .then((res)=>{
            console.log(res.data);
            setAdmins(res.data.data)
        }).catch((err)=>{
            console.log(err);
        })

    },[])

  return (
    <div className='mb-36'>
        <div className='w-full mx-auto text-center'>
        <button  className='border w-32 border-2 m-2  bg-blue-500 rounded-lg p-2 hover:bg-green-200'><Link to="/admin/add"></Link>ADD ADMIN</button>
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
