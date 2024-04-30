import React, { useContext } from 'react'
import { HelloContext } from './Context'

const Userreducer = () => {
const {User,dispatch}=useContext(HelloContext)

// console.log("final answer get it **",User);

function remove(){
dispatch({type:"remove"})
}

    
  return (
    <div>
      <h1>{User&&User.name}</h1>  
      <h1>{User&&User.place}</h1>  

<button onClick={remove}>Remove</button>

    </div>
  )
}

export default Userreducer