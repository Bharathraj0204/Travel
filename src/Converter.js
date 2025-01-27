import React, { useState } from 'react'

export default function Converter() {
    const[input,setInput]=useState()
    const[inp,setInp]=useState()
    const[currency,setCurrency]=useState('inr')
    const[curr1,setCurr1]=useState('inr')
  let Rates = {
    inr:{
        inr:1,
        usd:0.014,
        eur:0.012,
        gbp:0.01,
    },
    usd:{
        usd:1,
        inr:71.27,
        eur:0.86,
        gbp:0.74,
    },
    eur:{
        eur:1,
        inr:81.64,
        usd:1.16,
        gbp:0.86,
    },
    gbp:{
        gbp:1,
        inr:97.51,
        usd:1.35,
        eur:1.17,
    }

  }
  const handleChange=(e)=>{
    setInput(e.target.value)
    setInp(e.target.value*Rates[currency][curr1])
  }
  const handleChange1=(e)=>{
    setInp(e.target.value)
    setInput(e.target.value/Rates[currency][curr1])
  }
  return (
    <div>
        <center>
    <input type='number' value={input} placeholder='Enter amount' onChange={handleChange}></input>
    <select onChange={(e)=>setCurrency(e.target.value)}>
        <option value='inr'>INR</option>
        <option  value='usd'>USD</option>
        <option  value='eur'>EUR</option>
        <option  value='gbp'>GBP</option>
    </select><br></br>
    <input type='number' value={inp} placeholder='Converted amount' onChange={handleChange1}></input>
    <select onChange={(e)=>setCurr1(e.target.value)}>
        <option  value='inr'>INR</option>
        <option  value='usd'>USD</option>
        <option  value='eur'>EUR</option>
        <option  value='gbp'>GBP</option>
    </select>
    </center>
    </div>
  )
}
