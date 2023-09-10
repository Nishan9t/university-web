import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Services() {

  const [data,setData]=useState([])

useEffect(()=>{
  axios.get('http://localhost:8000/api/services')
  .then(res=>{
    console.log(res.data)
    setData(res.data.data)
  })
  .catch(err=>{
    console.log(err);
  })
})

  return (
    <div>
    {
      data.length > 0? 
      data.map((serviceItem)=>{
        return(
          <div key={serviceItem._id}>
            <div>{serviceItem.title}</div>
            <div>{serviceItem.description}</div>
          </div>
        )
      })
      :'no data found'
    }

    </div>
  )
}
