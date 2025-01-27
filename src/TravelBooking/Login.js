import React, { useEffect, useState } from 'react'
import  { useAuth } from './Aut'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[list, setList]=useState([])
  const[error,setError]=useState('')

  const loginform = useAuth()
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:3000/datas`)
    .then(res=>setList(res.data))
    
  },[])
   
  const handlelogin=(e)=>{
if(email==='nawinsr644@gmail.com' && password==='nawin'){
  navigate('/admin')
}
   
e.preventDefault()
const user = list.find(x=>x.username === email)


if(user){
  if(user.password === password){
    loginform.login(user.name)
    navigate('/')
  }
    else if(user.name!=password){
      setError('Incorrect password')
    }
// else {
//     setError('InCorrect Password')
//   }
  
}
else{
  setError('USer not found')
}
  }
  return (
    <div>
      <form id='box'  onSubmit={handlelogin}>
        <h1>Login</h1>
        
        <input id='text' type='email' placeholder="UserName" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>

        <input  id='text' type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
        <button id='btn' type='submit'>Login</button>
      </form>
      {error}
      
    </div>
  )
}
