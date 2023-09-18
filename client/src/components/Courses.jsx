import React, { useEffect } from 'react'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getCourses } from '../reducers/courseReducer';

export default function Courses() {

      const dispatch =useDispatch();

      const courseState = useSelector(state=>state.courseReducer)

      useEffect(()=>{

            dispatch(getCourses())

      },[])

  return (

      
    <div className='lg:flex-wrap md:flex lg:mx-auto mb-36 justify-center mt-4'>

    {
      courseState.coursesData &&
             courseState.coursesData.length > 0 ?
                  courseState.coursesData.map((item)=>{
                        return(
                           <div className='flex border border-2 border-solid p-2 ml-8 my-4 h-32 lg:w-3/4 sm:w-full md:w-full shadow-lg items-center rounded-md'>
                              <div className='font-bold text-lg capitalize '>{item.title}</div>
                              <div className='m-4'>{item.description}</div>
                           </div>
                        )
    })
    :
    'no data found'
    }
   
{/*     
      <div className='flex border border-2 border-solid p-2 ml-8 my-4 h-32 lg:w-3/4 sm:w-full md:w-full shadow-lg items-center rounded-md'>
            <div className='font-bold text-lg capitalize'>course name</div>
            <div className='m-4'>course decription</div>
      </div>
      <div className='flex border border-2 border-solid p-2 ml-8 my-4 h-32 lg:w-3/4 sm:w-full md:w-full shadow-lg items-center rounded-md'>
            <div className='font-bold text-lg capitalize '>course name</div>
            <div className='m-4'>course decription</div>
      </div>
      <div className='flex border border-2 border-solid p-2 ml-8 my-4 h-32 lg:w-3/4 sm:w-full md:w-full shadow-lg items-center rounded-md'>
            <div className='font-bold text-lg capitalize'>course name</div>
            <div className='m-4'>course decription</div>
      </div>
      <div className='flex border border-2 border-solid p-2 ml-8 my-4 h-32 lg:w-3/4 sm:w-full md:w-full shadow-lg items-center rounded-md'>
            <div className='font-bold text-lg capitalize'>course name</div>
            <div className='m-4'>course decription</div>
      </div>
      <div className='flex border border-2 border-solid p-2 ml-8 my-4 h-32 lg:w-3/4 sm:w-full md:w-full shadow-lg items-center rounded-md'>
            <div className='font-bold text-lg capitalize'>course name</div>
            <div className='m-4'>course decription</div>
      </div> */}
      
    </div>

     
   
  )
}
