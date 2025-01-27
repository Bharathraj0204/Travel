import React ,{useState,useEffect}from 'react'
import axios from 'axios'
export default function Studentslist () {

    
    const[list,setList]=useState([])
    const[id,setId]=useState('')
    const[name,setName]=useState('')
    const[marks,setMarks]=useState(0)
    //updatestate
    const[id1,setId1]=useState('')
    const[name1,setName1]=useState('')
    const[marks1,setMarks1]=useState(0)
    const[ispopup,setIsPopup]=useState(false)
    //read
      useEffect(()=>{
        axios.get(`http://localhost:3000/Students`)
        .then(res=>{setList(res.data)})
        .catch(err=>{console.log(err);})
      })
      //create
      const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/Students',{id:id,name:name,marks:marks})
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
      }
      //delete
      const handleDelete = (id)=>{
        axios.delete(`http://localhost:3000/Students/${id}`)
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err);})
      }
      const openPopUp = (data)=>{
        setIsPopup(true)
        setId1(data.id)
        setName1(data.name)
        setMarks1(data.marks)
      }
    const handleSubmit1 = ()=>{
        axios.put(`http://localhost:3000/Students/${id1}`,{id:id1,name:name1,marks:marks1})
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err);})
    }
  return (
    <div>
       <form onSubmit={handleSubmit}>
        <label>id</label>
        <input value={id} onChange={(e)=>{setId(e.target.value)}} type='number'></input>
        <label>name</label>
        <input value={name} onChange={(e)=>{setName(e.target.value)}} type='text'></input>
        <label>marks</label>
        <input value={marks} onChange={(e)=>{setMarks(e.target.value)}} type='number'></input>
        <button type='submit'>add data</button>
        </form> 
        <table>
          <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>marks</th>
                <th>actions</th>
            </tr>
            </thead> 
            <tbody>
                {list.map(x=>(
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.marks}</td>
                        <td><button onClick={()=>{handleDelete(x.id)}}>delete</button></td>
                       <td><button onClick={()=>{openPopUp(x)}}>update</button></td>
                    </tr>
                ))}
                </tbody>   
        </table>
        <div>
       {ispopup &&<form onSubmit={handleSubmit1}>
        <label>id</label>
        <input value={id1} onChange={(e)=>{setId1(e.target.value)}} type='number'></input>
        <label>name</label>
        <input value={name1} onChange={(e)=>{setName1(e.target.value)}} type='text'></input>
        <label>marks</label>
        <input value={marks1} onChange={(e)=>{setMarks1(e.target.value)}} type='number'></input>
        <button type='submit'>Updates</button>
        </form> 
}
        </div>
        </div>
        
     
    
  )
}
