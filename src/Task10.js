import React, { useState } from 'react'

export default function Task10() {
    const[input,setInput]=useState('')
    const[select,setSelect]=useState('')
    // const[list,setList]=useState([])
    const[low,setLow]=useState([])
    const[medium,setMedium]=useState([])
    const[high,setHigh]=useState([])
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(select==='low'){
            setLow([...low,input])
        }
        else if(select==='medium'){
            setMedium([...medium,input])
        }
        else if(select==='high'){
            setHigh([...high,input])
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <center>
        <h1>Task 10</h1>
        <input onChange={(e)=>setInput(e.target.value)} type='text'/>
        <select onChange={(e)=>setSelect(e.target.value)}>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
        </select>
        <button type='submit'>Add task</button>
        </center>
        </form>
        <div>
            <p><h1>Low</h1></p>
            {low.map(x=>(
                <h1>{x}</h1>
                
            ))}
        </div>
        <div>
            <p><h1>Medium</h1></p>
            {medium.map(x=>(
                <h1>{x}</h1>
                
            ))}
        </div>
        <div>
            <p><h1>High</h1></p>
            {high.map(x=>(
                <h1>{x}</h1>
            ))}
        </div>
    </div>
  )
}
