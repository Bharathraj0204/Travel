import React, { useState } from 'react'

export default function Dataadd() {
  const[text,setText]=useState('')
  const[textarea,setTextarea]=useState('')
  const[select,setSelect]=useState('')
  const[list,setList]=useState([])
  const handleSubmit=(e)=>{
    e.preventDefault()
    setList([{a:text,b:textarea,c:select}])
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Text:</label>
            <input onChange={(e)=>setText(e.target.value)} type='text' /><br></br>
            <label>Textarea:</label>
            <input onChange={(e)=>setTextarea(e.target.value)} type='textarea'/><br></br>
            <label>select:</label>
            <select onChange={(e)=>setSelect(e.target.value)}>
              <option>Select an option</option>
              <option>option1</option>
              <option>option2</option>
              <option>option3</option>
            </select><br></br>
            <button type='submit'>Submit</button>
        </form>
        {list.map(x=>(
          <div>
            <ul>     
          <li>{x.a}</li>
          <li>{x.b}</li>
          <li>{x.c}</li>
          </ul>

          </div>
        ))}
    </div>
  )
}
