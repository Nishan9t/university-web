import React, { useEffect } from 'react'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getCourses } from '../reducers/courseReducer';
import { Link } from 'react-router-dom';

export default function Courses() {

      const type=localStorage.getItem('type')
      const token=localStorage.getItem('token')


      const dispatch =useDispatch();

      const courseState = useSelector(state=>state.courseReducer)

      useEffect(()=>{

            dispatch(getCourses())

      },[])

      useEffect(()=>{
   

      },[type,token])
 
  return (

<div className=' mb-36  mt-4 items-center mx-auto w-full'>
      {
        courseState.isLoading && <h1 className='text-center'>LOADING...</h1>
      }
    <div className='lg:flex-wrap lg:mx-auto justify-center'>

    {
      courseState &&
      courseState.coursesData &&
             courseState.coursesData.length > 0 ?
                  courseState.coursesData.map((item)=>{
                        return(
                        <div className='relative border  border-2 border-solid p-2 sm:mx-auto m-4 h-32 lg:w-3/4 sm:w-full md:w-full shadow-lg items-center rounded-md'>
                           <div className='lg:flex '>
                              <div className='font-bold text-lg capitalize '>{item.title}</div>
                              <div className='m-4'>{item.description}</div>
                              
                           </div>
                           
                        <div className='p-2 absolute right-0 text-blue-400 underline'>
                        <Link to={`/course/${item._id}/students`}>Enrolled Student</Link></div>
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

     
    </div>
  )
}
