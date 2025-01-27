import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {

    const[name,setName]=useState('')
    const[username,setUsername]=useState('')
    const[password, setPassword]=useState('')
const navigate=useNavigate()

    const handlesubmit=()=>{
            axios.post(`http://localhost:3000/datas`,{name,username,password})
            .then(res=>res.data)
            .catch(err=>console.log(err))
            navigate('/')
    }

  return (
    <div >
        <form id='box' onSubmit={handlesubmit}>
          <h1>SignUp</h1>
        
        <input id='text' type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} /><br></br>
        
        <input id='text' type='e-mail' placeholder='E-mail Id' value={username} onChange={(e)=>setUsername(e.target.value)}/><br></br>
        
        <input id='text' type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br></br>
        <button id='btn' type='submit'>SignUp</button>
        </form>
        
    </div>
  )
}
