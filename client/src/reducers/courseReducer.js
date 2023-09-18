

import axios from "axios"


export const getCourses=()=>{
    return async(dispatch)=>{

        dispatch({type:"GET_COURSES"})
        const response = await axios.get('http://localhost:8000/api/services')

        if(response)
        {
            dispatch({type:'GET_COURSES_COMPLETED' , payload: response.data.data})
        }

        if(!response)
        {
            dispatch({type:'GET_COURSES_FAILED' })
        }

    }
}


const courseReducer = (state={ isLoading : false , coursesData:[]} , action)=>{

    if(action.type ==='GET_COURSES')
    {
        return {
            isLoading:true,
        }
    }

    if(action.type ==='GET_COURSES_COMPLETED')
    {
        return {
            isLoading:false,
            coursesData:action.payload
        }
    }
    if(action.type ==='GET_COURSES_FAILED')
    {
        return {
            isLoading:false,
            coursesData:[]
        }
    }
    return state
}

export default courseReducer