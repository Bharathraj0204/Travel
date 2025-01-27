import React, { useState } from 'react'

export default function Task9() {
    const[usd,setUsd]=useState('')
    const[eur,setEur]=useState('')
    const[gbp,setGbp]=useState('')
    const[jpy,setJpy]=useState('')
    const[aud,setAud]=useState('')
    const datas = {
         eur:{
          usd:0.85,
          gbp:0.72,
          jpy:109.89,
          aud:1.32,
},

    }

    const handleEur=(e)=>{
      setEur(e.target.value)
      setEur(e.target.value*datas)
    }
    
  return (
    <div>
      <label>USD:</label> 
      <input value={usd} type='number'/><br></br>
      <label>EUR:</label> 
      <input onChange={handleEur} value={eur} type='number'/><br></br>
      <label>GBP:</label> 
      <input onChange={(e)=>setGbp(e.target.value)} value={gbp} type='number'/><br></br>
      <label>JPY:</label> 
      <input onChange={(e)=>setJpy(e.target.value)} value={jpy} type='number'/><br></br>
      <label>AUD:</label> 
      <input onChange={(e)=>setAud(e.target.value)} value={aud} type='number'/>
    </div>
  )
}
