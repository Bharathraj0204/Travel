import axios from 'axios'
import React, {   useState } from 'react'

export default function Booktaxi() {
    const[select,setSelect]=useState('')
   const[list,setList]=useState([])
   const handleClick=()=>{
    // setSelect(true)
    //   setList(select)
      axios.get('http://localhost:3000/Drivers')
      .then(res=>setList(res.data))
      .catch(err=>console.log(err))
   }
   const handleClick1=()=>{
    alert('you re successfully booked')
   }
   
  
   
       
  return (
    <div>
        <label>Booktaxi</label>
        <select className='box' value={select} onChange={(e)=>setSelect(e.target.value)}>
            <option>Innova</option>
            <option>Swift</option>
            <option>Creta</option>
        </select>
            <button onClick={handleClick}>Submit</button>
       
           
          
                {list.map(x=>(
                       <table>
                    <thead>
                       
                     <tr>
                         <th>id</th>
                         <th>name</th>
                         <th>experience</th>
                         <th>select</th>
                         
                     </tr>
                 </thead>
                  <tbody>
                    <tr>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.experience}</td>
                        <button onClick={handleClick1}>Confirm</button>
                    </tr>
                    </tbody>
                    </table>
                ))}
          
         

    </div>
  )
}
