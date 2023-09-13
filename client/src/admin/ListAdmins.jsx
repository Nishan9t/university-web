import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
    <div>
        {
            admins.length>0
            ?
           admins.map((user)=>{
            return(
                <div className='flex flex-col flex-wrap '>
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
