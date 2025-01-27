import React, { useEffect, useState } from 'react'

export default function Timer() {
    const[count,setCount]=useState(0)
    const[isRunning,setIsRunning]=useState(false)
    useEffect(()=>{
        if(isRunning){
            const interval = setInterval(()=>{
                setCount(prev=>prev+1)
            },1000)
            return()=>{
                clearInterval(interval)
            }
        }
        
    },[isRunning])
    const handleStart=()=>{
        setIsRunning(false)
    }
    const handleStop=()=>{
        setIsRunning(true)
    }
  return (
    <div>
        <h1>{count}</h1>
       <button onClick={isRunning?handleStart:handleStop}>{isRunning?'stop':'start'}</button>
       <button onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  )
}
