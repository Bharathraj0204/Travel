import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function () {
    const[list,setList]=useState([])
    const[id,setId]=useState('')
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{setList(res.data)})
        .catch(err{console.log(err)})
    })
   
  return (
    <div>
        <input onChange={()=>{setId(e.target.value)}} type='text'></input>  
        {/* <button type='submit'></button> */}
        <h1>{list.title}</h1>
    </div>
  )

}
