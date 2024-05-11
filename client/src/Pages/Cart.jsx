import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { useOutletContext } from 'react-router-dom'

const Cart = () => {

    const data=useOutletContext()
    console.log("data value",data);

  return (
    
    <div style={{width:'100%',height:'500px',backgroundColor:"lightgreen"}}>
        {data.map((li)=>(
 <h1>Cart page    :  {li}</h1>
        ))}
       
    </div>
    
  )
}

export default Cart