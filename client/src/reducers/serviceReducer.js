

const serviceReducer = (state={ count : 10} , action)=>{

    if(action.type ==='ADD')
    {
        return {count: state.count + action.payload}
    }

    if(action.type ==='SUB')
    {
        return {count: state.count - action.payload}
    }
    return state
}

export default serviceReducer