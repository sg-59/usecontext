import React, { useMemo, useState } from 'react'

const Usememo1 = () => {

    const [state1,setState1]=useState(0)
    const [state2,setState2]=useState(0)


    console.log("component re-rendered");

    // function hello(){
    //     let i=0
    //     while(i<2000000000)
    //         i++
        

    //     return state1%2==0
    // }

   const data=useMemo(()=>{
        let i=0
            while(i<2000000000)
                i++
            
    
            return state1%2==0
    },[state1])

  

  return (
    <div>
        <h1>state 1 value :{state1}</h1>
        <h1>state 2 value :{state2}</h1>
        {data ? "even" : "Odd"}
      <button onClick={()=>setState1(state1+1)}>Click 1</button>
      <button onClick={()=>setState2(state2+1)}>Click 2</button>
    </div>
  )
}

export default Usememo1
