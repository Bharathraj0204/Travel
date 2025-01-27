import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Travel.css'
import Logo from '../TravelBooking/Travelimages/logo.jpg'
 


export default function Navbar() {
  const[place,setPlace]=useState(null)
  const navigate=useNavigate()
  const handleSubmit=()=>{
    if(place==='coimbatore'){
      navigate('/coimbatore')
    }
    else if(place==='ooty'){
      navigate('/ooty')
    }
    else if(place==='kodai'){
      navigate('/kodai')
    }
    else {
      navigate('/')
    }
  }
  return (
    <div className='navbar-boot'>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <NavLink  className='nav-link' to='./'> <img className='logo' src={Logo} alt='Logo'/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <form onSubmit={handleSubmit} className="d-flex">
        <input onChange={(e)=>setPlace(e.target.value)} value={place} className="form-control me-2" type="search"  placeholder="Search" aria-label="Search"/>
        <button  className="btn btn-outline-success" type="submit">Search</button>
      </form>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
        <NavLink  className='nav-link' to='/hotel'>Find Hotel</NavLink>
        </li>
        <li className="nav-item dropdown">
        
        <NavLink className='nav-link' to='/signup'>SignUp</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to='/login'>Login</NavLink> 
        </li>
     
      </ul>
     
    </div>
  </div>
</nav>
    
        
    </div>
  )
}
