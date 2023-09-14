import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {FaLessThan,FaGreaterThan} from 'react-icons/fa'
import {MdCircle} from 'react-icons/md'

export default function Carousel() {

    const [images,setImages] = useState([])
    const [ind,setInd]=useState(0);

    function indexSet(work){
      if(ind===2 && work==="+")
      {
        setInd(0);
      }
      else if(ind===0 && work==="-")
      {
        setInd(2);
      }
      else{
        if(work==="+")
        {
          setInd((prev)=> prev+1);
        }
        else 
        {
          setInd((prev)=> prev-1);
        }
        
      }
      }

      setTimeout(()=>{
        if(ind===2)
        {
          setInd(0);
        }
        else{
          setInd(ind+1);
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

        

    },[ind])


  return (

    <div>
          <div className='relative'>

        
                  <div className='flex align-center justify-center relative '>
                          <button className=' p-2 absolute top-1/2 left-44 border border-white hover:border-blue-500 bg-slate-100 rounded-2xl white-200' onClick={()=>indexSet("-")}><FaLessThan/></button>
                      
                          <img className='' src={images[ind]}alt="carousel"/>
                        
                          <button className='p-2 absolute top-1/2 right-44 border border-white hover:border-blue-500 bg-slate-100 rounded-2xl white-200' onClick={()=>indexSet("+")}><FaGreaterThan/></button>
                          
                  </div>

                  <div className='flex justify-center absolute bottom-4 left-1/2'>

                      {
                        images.map((image,index)=>{
                        
                          return(
                            <div className='m-2'>
                              <MdCircle className={index===ind ? 'text-red-500':''}/>
                            </div>
                          )}
                        )
                      }
                  </div>
                
          </div>

    </div>
  )
}