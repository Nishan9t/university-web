import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Carousel() {

    const [images,setImages] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/slider')
        .then(res=>{
            console.log(res.data);
            setImages(res.data.data)
        })
        .catch(err =>{
            console.log(err)
        })

    },[])
  return (
    <div>Carousel</div>
  )
}
