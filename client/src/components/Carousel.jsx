import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {FaLessThan,FaGreaterThan} from 'react-icons/fa'
import {MdCircle} from 'react-icons/md'

export default function Carousel() {

    const [images,setImages] = useState([])
    
    const [ind,setInd]=useState(0);
    const len = images.length-1;

    function indexSet(work){
      if(ind===len && work==="+")
      {
        setInd(0);
      }
      else if(ind===0 && work==="-")
      {
        setInd(len);
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
        if(ind===len)
        {
          setInd(0);
        }
        else{
          setInd(ind+1);
        }
      }, 3000);
    

    useEffect(()=>{
        axios.get('https://university-server-5nor.onrender.com/api/slider')
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
                          <button className='invisible md:visible lg:visible p-2  absolute top-1/2 md:left-44 border border-white hover:border-blue-500 bg-slate-100 rounded-2xl white-200' onClick={()=>indexSet("-")}><FaLessThan/></button>
                      
                          <img  className='h-96 w-full' src={images[ind]}alt="carousel"/>
                        
                          <button className='invisible md:visible lg:visible p-2  absolute top-1/2 md:right-44  border border-white hover:border-blue-500 bg-slate-100 rounded-2xl white-200' onClick={()=>indexSet("+")}><FaGreaterThan/></button>
                          
                  </div>

                  <div className='invisible md:visible flex justify-center absolute bottom-4 left-1/2'>

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
