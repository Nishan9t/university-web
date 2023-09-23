import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import contactReducer,{getContact} from '../reducers/contactReducer'
import {AiFillDelete} from 'react-icons/ai'


export default function ContactsAdmin() {

  const navigate=useNavigate()
  const dispatch=useDispatch();

  const contactState = useSelector(state=>state.contactReducer)

   const [title,setTitle]=useState("")
   const [desc,setDesc]=useState("")
  


   useEffect(()=>{
      if(!localStorage.getItem('token')){
        navigate('/home')
      }
   },[])

   useEffect(()=>{

    dispatch(getContact())

},[])
  
   const handleSubmit=async()=>{
      await axios.post('http://localhost:8000/api/contacts', 
      {
        title:title,
        description:desc
      },
      {
        headers:{'authorization':localStorage.getItem('token')}
      }).then((res)=>{
        if(res.data.code ===403 && res.data.message==="token expire")
        {
          localStorage.setItem('token',null)
        }
        setTitle("");
        setDesc("");
       
        alert(res.data.message);
        navigate("/contact")

      }).catch(err=>{
        console.log(err)
      })

     
   }


   const handleDelete=async(id)=>{

    await axios.delete(`http://localhost:8000/api/contacts/delete/${id}`,
      {
        headers:{'authorization':localStorage.getItem('token')}
      }).then((res)=>{
        if(res.data.code ===403 && res.data.message==="token expire")
        {
          localStorage.setItem('token',null)
        }
        alert(res.data.message)
        navigate("/contact")

      }).catch(err=>{
        console.log(err)
      })

   }




  return (
    <div className='mb-36'>
        <div className='flex flex-col w-1/2 justify-center align-center mx-auto shadow-xl mt-4  p-4'>
          <input type='text' className='m-4  border border-2 hover:border-green-200 p-2 rounded-lg' placeholder='Contact Title' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
          
          <textarea className='m-4 h-36  border border-2 hover:border-green-200 p-2 rounded-lg' placeholder='Contact Description' value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
        
          
          <button className='border w-32 border-2 border-green-200 rounded-lg p-2 hover:bg-green-200 self-center' onClick={(e)=>handleSubmit()}>ADD CONTACT</button>
        </div>

        <div>
        {
            
            contactState &&
            contactState.contactData &&
            contactState.contactData.length >0 ?
            contactState.contactData.map((item)=>{
              return(
                <div className=" flex justify-between  lg:py-16 lg:m-16 shadow-lg px-4">
  
                  <div className='lg:px-8'>
                  <h1 className="font-bold text-lg">{item.title}</h1>
                  <p>
                  {item.description}
                  </p>
                  </div>
  
                  <div className='my-auto px-4 hover:text-red-500 text-4xl hover:scale-125 h-full'>
                      <button className='h-full' onClick={()=>handleDelete(item._id)}><AiFillDelete /></button>
                  </div>
  
                </div>
                )
               })
               :
               <h1 className='text-center bold mx-auto mt-4'>no about data found</h1>
  
          }
          </div>
        
    </div>
  )
}
