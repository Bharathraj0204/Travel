import React, { useEffect,useState } from 'react'

export default function () {
    const[x,setx]=useState()
    const[y,sety]=useState()
    const logpose = ()=>{
        console.log('mousemove')
        setx(e.clientx)
        sety(e.clienty)
    }
    useEffect(()=>{
        window.addEventListener('Mousemove','logpose')
    })
    return()=>{
        {removeEventListener('Mousemove','logpose'),[]}
    }

  return (
    <div>
      <h1>mousemove</h1>
      x-{x} y-{y}
    </div>
  )
}
