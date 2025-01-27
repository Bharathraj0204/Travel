import React,{useEffect,useState} from 'react'

export default function () {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log('component');
    },[])
  return (
    <div>
        <button onClick={()=>{
            setCount(count+1)
        }}>clicked{count}</button>

        
    </div>
  )
}
