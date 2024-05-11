import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{width:'100%',height:'70px',backgroundColor:"skyblue",display:'flex',alignItems:'center',justifyContent:"space-around"}}>
       {/* <Link to={'/'}><h3>Home</h3></Link> 
       <Link to={'/cart'}><h3>Cart</h3></Link> */}
       <NavLink to={'/'} style={({isActive})=>{return isActive ? {color:"red"} : {color:"green"} }}>Home</NavLink> 
      <NavLink to={'/cart'} style={({isActive})=>{return isActive ? {color:"red"} : {color:"green"}}}>Cart</NavLink>
        <h3>Logout</h3>
    </div>
  )
}

export default Navbar