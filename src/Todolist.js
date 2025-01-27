import React ,{useState} from "react";

function Todolist(){
  const[input,setInput]=useState('')
    const[value,setvalue]=useState([])
    const handleClick = (e)=>{
      e.preventDefault()
      setvalue([...value,input])
      setInput('')
    }
      
      const removeClick = ()=>{
       const newdata = [...value]
       newdata.splice(value.length-1)
       setvalue(newdata)
      }
     return(
       <> 
   
     <center>
      <input value={input} onChange={(e)=>{setInput(e.target.value)}} type="text"/>
      <button onClick={handleClick} type="submit">add</button>
      
        <button type="submit" onClick={removeClick}>remove</button>
      <ul>
        
        {value.map((x)=>(
          <li> {x}
          </li>
        ) )}
      </ul>
        </center>
    </>

    )
}
export default Todolist 