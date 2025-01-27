import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import admininstration from './Travelimages/admin.png'

export default function Admin() {
  const[id,setId]=useState('')
  const[name,setName]=useState('')
  const[experience,setExperience]=useState('')
  const[list,setList]=useState([])
  const[admin,setAdmin]=useState(false)
 

  //update
  const[id1,setId1]=useState('')
  const[name1,setName1]=useState('')
  const[experience1,setExperience1]=useState('')
  const[pop,setPop]=useState(false)


  const handleadmins=()=>{
      setAdmin(true)
  }
  useEffect(()=>{
    axios.get(`http://localhost:3000/Drivers`)
    .then(res=>setList(res.data))
    .catch(err=>console.log(err))
  })  
 
  

  const handleClick=(e)=>{
    e.preventDefault()
      axios.post(`http://localhost:3000/Drivers`,{id:id,name:name, experience:experience})
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
      setId("")
      setExperience('')
      setName('')
      
}

const handledel=(x)=>{
  axios.delete(`http://localhost:3000/Drivers/${x}`)
  .then(res=>console.log(res))
  .catch(err=>console.log(err))
}
const handleupdatesubmit=()=>{
  axios.put(`http://localhost:3000/Drivers/${id1}`,{id:id1,name:name1,experience:experience1})
  .then(res=>console.log(res))
  .catch(err=>console.log(err))

}
const handleupdate=(data)=>{
  setPop(true)
  setId1(data.id)
  setName1(data.name)
  setExperience1(data.experience)
}
  
  
 
  return (
    <div>

          <div className='card'>
                <img src={admininstration}  alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Administrator</h5>
                  <p className="card-text">Admin Can Only access the Changes and Edit the Details</p>
                  <button onClick={handleadmins}>Updates</button>
              </div>




      {admin &&
      <>
        <form onSubmit={handleClick}>
            
            <input value={id} placeholder='Id' onChange={(e)=>setId(e.target.value)} type='number'/>

            <input value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)} type='text'/>
           
            <input value={experience} placeholder='Experience' onChange={(e)=>setExperience(e.target.value)} type='number'/>
            <button type='submit'>ADD</button>
        </form>
         <table>
        <thead>
        <tr>
                         <th>id</th>
                         <th>name</th>
                         <th>experience</th>
                         <th>Changes</th>
                         
                     </tr>
                 </thead>
                 <tbody>
              {list.map(x=>(      
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.experience}</td>
                        <td><button onClick={()=>handleupdate(x)}>Upadate</button></td>
                        <td><button onClick={()=>handledel(x.id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
                </table>
     

   
        {pop &&
          <form onClick={handleupdatesubmit}>
            <label>Id</label>
            <input value={id1} onChange={(e)=>setId1(e.target.value)} type='number'/>
            <label>Name</label>
            <input value={name1} onChange={(e)=>setName1(e.target.value)} type='text'/>
            <label>Experience</label>
            <input value={experience1} onChange={(e)=>setExperience1(e.target.value)} type='number'/>
             <button  type='submit'>NewUpdate</button>
        </form>
      }
      </>
    }
</div>
    </div>
  )
}
