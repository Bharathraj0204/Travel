import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.css';


export default function ShoppingChart() {
    const [list,setList]=useState([])
    const[id, setId]=useState('')
    const[name,setName]=useState('')
    const[form, setForm]= useState(true)
    // const[table, setTable]=useState(false)
    useEffect(()=>{
        axios.get(`http://localhost:3000/Students`)
        .then(res=>{setList(res.data)})
        .catch(err=>{console.log(err)})
    },[])

    const handleSubmit =()=>{
        axios.post(`http://localhost:3000/Students`,{id:id, name:name})
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})

       
    }
    const handlehide=(id)=>{
        console.log("Hi");
        setForm(id)
        axios.get(`http://localhost:3000/Students${id}`)
        .then(res=>{setForm(res.data)})
        .catch(err=>{console.log(err)})

        
    }
    
  return (
    <div>
        <h1>Shopping Chart App</h1>
        <form onSubmit={handleSubmit}>
        <label>Id:</label>
        <input type='number' value={id}  onChange={(e)=>{
            setId(e.target.value)
        }}/>
        <label>Name:</label>
        <input type='text' value={name} onChange={(e)=>{
            setName(e.target.value)
        }}/>
        <button type='submit'>Add</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Id:</th>
                    <th>Name:</th>
                    <th>Add to Cart</th>
                </tr>
            </thead>
            <tbody>
                {list.map(x=>(
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td><button onClick={()=>{handlehide()}}><i class="fa-solid fa-cart-shopping"></i></button></td>
                    </tr>
                ))}
                
            </tbody>
         </table>

         <h1>{form}</h1>
      
        
    </div>

  )
}
