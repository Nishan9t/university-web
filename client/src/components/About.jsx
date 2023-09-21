import React, { useEffect } from "react";
import Footer from './Footer'
import { useDispatch, useSelector } from "react-redux";
import aboutReducer, { getAbout } from "../reducers/aboutReducer";

export default function About() {

  const dispatch = useDispatch();
  const aboutState = useSelector(state => state.aboutReducer)

  useEffect(()=>{

    dispatch(getAbout())

  },[])


  return (
    <div className="mb-36">
  {
    aboutState &&
    aboutState.aboutData &&
    aboutState.aboutData.length >0 ?
    aboutState.aboutData.map((item)=>{
      return(
        <div className="lg:px-16 lg:py-16 lg:m-16 shadow-lg ">
          <h1 className="font-bold text-lg">{item.title}</h1>
          <p>
          {item.description}
          </p>
     
    </div>
      )
    })
    :
    <h1>no about data found</h1>


  }
    
   
    

    </div>
    
    
  );
}
