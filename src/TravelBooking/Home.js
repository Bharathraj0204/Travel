import React, { useState } from 'react'
import isha from './Travelimages/isha.jpg'
import kanya from './Travelimages/kanya.avif'
import kodai from './Travelimages/kodai.jpg'
import ooty from './Travelimages/Ooty.jpg'
import thanjavur from './Travelimages/thanjavur.jpeg'
import madurai from './Travelimages/madurai.jpeg'


import { useNavigate } from 'react-router-dom'



export default function Home() {



  const [date1, setDate1]=useState('')
  const [date2, setDate2]=useState('')
  const [ calculate, setCalculate]=useState('')

  const handledate=()=>{
      const start = new Date(date1)
      const end = new Date(date2)
      const differentinmillisecond = end.getTime()-start.getTime()
      const difference =Math.abs( differentinmillisecond / (1000 * 3600  *24) )
      setCalculate(`Confirm your ticket ${date1} To ${date2}. Total days: ${difference}`)
  }
  const[select,setSelect]=useState('')

const navigate = useNavigate()
const handleClick=(e)=>{

    if(select==='covai'){
      navigate('/coimbatore')
    }
    else if(select==='ooty'){
      navigate('/ooty')
    }
    else if(select==='Kodaikanal'){
      navigate('/kodai')
    }
   
    
}
  return (
    <div className='home-page'>
     
    <div className='search-bar'>
      <div>
        <select className='choose' onChange={(e)=>setSelect(e.target.value)}>
          <option>Choose place</option>
          <option value='covai'>coimbatore</option>
          <option value='ooty'>ooty</option>
          <option value='Kodaikanal'>Kodaikanal</option>
        {select}
        </select>
        <button className='choose-btn' onClick={handleClick}>Search</button>
        
        <input className='start-date' type='date' value={date1} placeholder='Start' onChange={(e)=>{setDate1(e.target.value)}}/>
        
        <input className='start-date' type='date' value={date2} placeholder='End' onChange={(e)=>{setDate2(e.target.value)}}/>
        <input className='start-date' type='number' placeholder='Members'/>
        <button className='choose-btn' onClick={handledate}>BSearch</button>
       {calculate}
        </div>
    </div>
    <div className='card-page'>
       <div className='card1'>
        <img src={isha} alt='isha' onClick={()=>navigate('/Coimbatore')}/>
        <img src={kanya} alt='kanyakumari'  />
        <img src={kodai} alt='kodaikanal' onClick={()=>navigate('/Kodai')} />
        <img src={ooty} alt='Ooty-img' onClick={()=>navigate('/Ooty')}/>
        <img src={thanjavur} alt='thanjavur-img' />
        <img src={madurai}  alt='Madurai-img'/>
</div>
</div> 
  </div>
  )
}
