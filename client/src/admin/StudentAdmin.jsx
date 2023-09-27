
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCourses } from '../reducers/courseReducer';
import {BsPersonFillAdd} from 'react-icons/bs'
import addStudent from '../components/AddStudent'

export default function StudentAdmin() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const courseState = useSelector(state=>state.courseReducer)

  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/home')
    }
 },[])

 useEffect(()=>{
    dispatch(getCourses())
 },[])

 const handleClick=(id)=>{
  navigate(`/${id}/addStudent`)
 }


  return (
    <div className='mb-36'>

<div>
        {
      courseState &&
      courseState.coursesData &&
             courseState.coursesData.length > 0 ?
                  courseState.coursesData.map((item)=>{
                        return(
                          <div className=" flex justify-between  lg:py-16 lg:m-16 shadow-lg px-4">

                            <div className='lg:px-8'>
                            <h1 className="font-bold text-lg">{item.title}</h1>
                            <p>
                            {item.description}
                            </p>
                            </div>

                            <div className='my-auto px-4 hover:text-red-500 text-4xl hover:scale-125 h-full'>
                                <button title='add student' onClick={()=>handleClick(item._id)}><BsPersonFillAdd/></button>
                
                            </div>
                           

                         </div>
                        )
                        })
                        :
                <h1 className='text-center bold mx-auto mt-4'>no data found</h1>
          }
        </div>

    </div>
  )
}
