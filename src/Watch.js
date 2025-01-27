import React,{useState,useEffect} from 'react'

export default function Watch() {
       const[count,setCount]=useState(0)
       const[isrunning,setIsRunning]=useState(false)
       useEffect(()=>{
        if(isrunning){
            const time = setInterval(()=>{
                setCount(prev=>prev+1)
            },1000)
        
        return()=>{
            clearInterval(time)
        }
    }
       },[isrunning])
  return (
    <div>
        <h1>Timer: {count}s</h1>
       <button onClick={()=>setIsRunning(true)}>start</button>:<button onClick={()=>setIsRunning(false)}>stop</button>
        <button onClick={()=>{setCount(0)}}>reset</button>

    </div>
  )
}
