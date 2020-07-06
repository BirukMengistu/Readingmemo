import React ,{ createContext, useContext, useReducer } from 'react'
export const AgeContext =createContext();

const ageReducer =(state,action)=>{
    switch (action.type)
{
 case 'ADD_ONE':
     return state +1;
 case 'ADD_FIVE':
    return state +1;
 case 'SUB_TWO': 
 return state -2;   
   default:
       return state;    
}
}
dispatch({type: 'ADD_ONE'});
dispatch({type: 'ADD_TWO'});
dispatch({type: 'SUB_TWO'});
const AgeContextProvider =(props)=>{
  const [] = useReducer(ageReducer ,20)
    return(

     <AgeContext.Provider value = {age , dispatch}>
     {props.children}
     </AgeContext.Provider>
    )

}

export default AgeContextProvider;