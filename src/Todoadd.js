import React, { useState } from 'react'

export default function Todoadd() {
    const[input,setInput]=useState('')
    const[list,setList]=useState([])
    const handleSubmit=(e)=>{
      setList([{a:input,b:list}])
      setInput('')
    }
  return (
    <div>
        <h1>Todoadd</h1>
        <input type='text' onChange={(e)=>setInput(e.target.value)}></input>
        <button onClick={handleSubmit}>Add task</button>
        {list.map(x=>(
            <p>
            <h1>{x.a}</h1>
            <h1>{x.b}</h1>
            </p>
        ))}
    </div>
  )
}
