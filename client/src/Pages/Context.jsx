// import { createContext } from "react";

// export const Hellocontext=createContext()


import { useEffect, useReducer } from "react"
import { createContext } from "react"

const INITIAL_STATE={
    User:JSON.parse(localStorage.getItem('Rijobatchcalicut')) || null,
    // User:null,
   
}  
 
export const HelloContext=createContext()
console.log("hello");

const UserReducer=(state,action)=>{
console.log("action value",action);
switch(action.type){
    case "success":
        return {User:action.data}

        case "remove":
            return {User:null}
}

}




export const UserInfoContextprovider=({children})=>{

    const [state,dispatch]=useReducer(UserReducer,INITIAL_STATE)
console.log("final data",state);
    useEffect(()=>{
localStorage.setItem('Rijobatchcalicut',JSON.stringify(state.User))
    },[state.User])



    return(

        <HelloContext.Provider value={{User:state.User,dispatch}}>

{children}

        </HelloContext.Provider>
    )
}


