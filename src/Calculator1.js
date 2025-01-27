import React, { useState } from 'react'

export default function Calculator1() {
    const[input,setInput]=useState('')
    const[output,setOutput]=useState('')
    const handleOutput=()=>{
      setOutput(input)
    }
  return (
    <div>
        <h1>Calculator</h1>
        <input type='text' value={input} ></input>
        <button onClick={()=>setInput(input+'1')}>1</button>
        <button onClick={()=>setInput(input+'2')}>2</button>
        <button onClick={()=>setInput(input+'3')}>3</button>
        <button onClick={()=>setInput(input+'4')}>4</button>
        <button onClick={()=>setInput(input+'5')}>5</button>
        <button onClick={()=>setInput(input+'+')}>+</button>
        <button onClick={()=>setInput(input+'-')}>-</button>
        <button onClick={()=>setInput(input+'*')}>*</button>
        <button onClick={()=>setInput(input+'/')}>/</button>
        <button onClick={()=>setInput(input+'.')}>.</button>
        <button onClick={()=>setInput('')}>C</button>
        <button onClick={()=>setInput(input+'.')}>.</button>
        <button onClick={()=>setInput(eval(input))}>=</button>
        <button onClick={()=>setInput(input.slice(0,input.length-1))}>#</button>
        <input onClick={handleOutput} value={output} type='text' ></input>
    </div>
  )
}
