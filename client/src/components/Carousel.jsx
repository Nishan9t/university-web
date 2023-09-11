import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {FaLessThan,FaGreaterThan} from 'react-icons/fa'

export default function Carousel() {

    const [images,setImages] = useState([])
    const [index,setIndex]=useState(0);

    function indexSet(work){
      if(index===2 && work==="+")
      {
        setIndex(0);
      }
      else if(index===0 && work==="-")
      {
        setIndex(2);
      }
      else{
        if(work==="+")
        {
          setIndex((prev)=> prev+1);
        }
        else 
        {
          setIndex((prev)=> prev-1);
        }
        
      }
      }

    

    useEffect(()=>{
        axios.get('http://localhost:8000/api/slider')
        .then(res=>{
            console.log(res.data);
            setImages(res.data.data)
        })
        .catch(err =>{
            console.log(err)
        })

    },[index])
  return (
    <div className='flex '>
            <button onClick={()=>indexSet("-")}><FaLessThan/></button>
            <img className='' src={images[index]}alt="carousel"/>{index}
            <button onClick={()=>indexSet("+")}><FaGreaterThan/></button>
            
    </div>
  )
}
