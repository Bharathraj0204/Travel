import React ,{useState,useEffect} from 'react'

export default function Stopwatch() {
    const[count,setCount]=useState(0)
    const[buttontext,setButtonText]=useState(false)
      useEffect(()=>{
         if(buttontext=='stop'){
            const time = setTimeout(()=>{
                setCount(prev=>prev+1)
            },500)
            return()=>{
                clearTimeout(time)
            }
        }
        })
  return (
   <>
   <center>
   <h1>{count}seconds</h1>
   <button onClick={()=>{setButtonText (buttontext==='start'?'stop':'start')}}>{buttontext}</button>
   <button onClick={()=>{setCount(0)}}>Reset</button>
   </center>
   </>
  )
}





