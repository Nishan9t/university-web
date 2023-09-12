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

      setTimeout(()=>{
        if(index===2)
        {
          setIndex(0);
        }
        else{
          setIndex(index+1);
        }
      }, 3000);

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
    <div className='flex align-center justify-center relative mt-4 '>
            <button className=' p-2 absolute top-1/2 left-96 border border-white hover:border-blue-500 bg-slate-100 rounded-2xl white-200' onClick={()=>indexSet("-")}><FaLessThan/></button>
         
            <img className='rounded-lg ' src={images[index]}alt="carousel"/>
          
            <button className='p-2 absolute top-1/2 right-96 border border-white hover:border-blue-500 bg-slate-100 rounded-2xl white-200' onClick={()=>indexSet("+")}><FaGreaterThan/></button>
            
    </div>
  )
}
