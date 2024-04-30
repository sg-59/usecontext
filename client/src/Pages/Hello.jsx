import React, { useContext } from 'react'
import { HelloContext } from './Context'


const Hello = () => {

const {dispatch}=useContext(HelloContext)

const person={
    name:"Ajay",
    place:"Kochi",
    password:123,
    gmail:"Alen@gmail.com"
}

const display=()=>{
    dispatch({type:"success",data:person})
}

  return (
    <div>
    <button onClick={display}>click</button>
    </div>
  )
}

export default Hello