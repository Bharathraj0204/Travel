import React,{useState,useEffect} from 'react'

export default function () {
    const[count,setCount] = useState('')
    const[isRunning,setIsRunning] = useState(false)
    useEffect(()=>{
        if(isRunning && count>0){
            const interval = setInterval(()=>{
                setCount(prev=>prev-1)
            },1000)
            return()=>{
                clearInterval(interval)
            }
        }
        
    },[count,isRunning])
  return (
    <div>
        <input type="number" onChange={(e)=>{setCount(e.target.value)}}></input>
        <button onClick={()=>{setIsRunning(true)}}>Start</button>
        {count===0?(<h1>Happy Birthday!</h1>):(<h1>CountDown Starts : {count}s</h1>)}
    </div>
  )
}
