import React, { useState } from 'react'
import Tabledata from './Tabledata'

export default function Form() {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [job, setJob] = useState('')
  const [list, setList] = useState([])
  const[form,setForm]=useState(false)
  const[table,setTable]=useState(false)
   
  const handlebtn =(e)=>{
    e.preventDefault()
    setList([...list,{id:id,name:name,job:job}])
  }

  return (
    <>
    
      <h1>Employee management</h1>
      <button onClick={createbtn}>create</button>
      <button onClick={readbtn}>read</button>
      {form&&
      <form>
        <label>Id:</label>
        <input type='text' value={id} onChange={(e)=>{setId(e.target.value)}} /><br/>
        <label>Name:</label>
        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} /><br/>    
        <label>Job</label>
        <select onChange={(e)=>{setJob(e.target.value)}} >
          <option value="Select Job" >Select Job</option>
          <option value="Front-end Developer" >Front-end Developer</option>
          <option value="Back-end Developer" >Back-end Developer</option>
          <option value="Project Manager" >Project Manager</option>
          <option value="hr" >Hr</option>
        </select>
        <button onClick={handlebtn} >Submit</button>
      </form>
}
   </>
      
)}
     
     
     
   