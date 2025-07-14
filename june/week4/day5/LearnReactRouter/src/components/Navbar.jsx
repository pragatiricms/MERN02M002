import React from 'react'
import { Link, NavLink } from 'react-router'

function Navbar() {
  return (
    <div>
      <NavLink to="/" style={({isActive})=>({color:isActive?"red":""})}>Home</NavLink>
      <NavLink to="/about" style={({isActive})=>({color:isActive?"red":""})}>About</NavLink>
      <NavLink to="/contact" style={({isActive})=>({color:isActive?"red":""})}>Contact</NavLink>
      <NavLink to="/service" style={({isActive})=>({color:isActive?"red":""})}>Service</NavLink>
      <NavLink to="/register" style={({isActive})=>({color:isActive?"red":""})}>Register</NavLink>
      <NavLink to="/byId/30" style={({isActive})=>({color:isActive?"red":""})}>SendID</NavLink>

    </div>
  )
}

export default Navbar
