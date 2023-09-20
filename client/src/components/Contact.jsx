import React, { useEffect } from 'react'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import contactReducer, { getContact } from '../reducers/contactReducer';

export default function Contact() {

  const dispatch = useDispatch();

  const contactState = useSelector(state=>state.contactReducer)

  useEffect(()=>{

    dispatch(getContact())

},[])


  return (

    
    <div className=' mb-36' >
    {
      contactState &&
        contactState.contactData &&
          contactState.contactData.length>0 ?
          contactState.contactData.map((item)=>{
            return(
              <div className="lg:px-16 lg:py-16 lg:m-16 shadow-lg sm:p-4 md:p-4 sm:m-4 md:m-4">
            <h1 className="font-bold text-lg">{item.title}</h1>
            <p>
            {item.description}
            </p>
           </div>
            )
            
          })
          :
          <h1>no data found</h1>

    }
      
     
    </div>
    
   
   
  )
}
