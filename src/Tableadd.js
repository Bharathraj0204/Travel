import React, { useState } from 'react'

export default function Tableadd() {
    const[list,setList]=useState('')
    const[count,setCount]=useState([])
   const handleSubmit=(e)=>{
        e.preventDefault()
        setCount([...count,list])
        setList('')
   }
  return (
    <div>
       <h1>List components</h1>
       <form onSubmit={handleSubmit}>
        <input type='text' value={list} placeholder='enter text' onChange={(e)=>{setList(e.target.value)}}/>
        <button type='submit'>Submit</button>
       </form>
       <ul>
        {count.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
       </ul>
    </div>
  )
}
