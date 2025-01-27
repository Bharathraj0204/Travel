import React,{useState} from 'react'
import isha from '../TravelBooking/Travelimages/isha.jpg'
import kutralam from '../TravelBooking/Travelimages/kovai kutralam.jpeg'
import valparai from '../TravelBooking/Travelimages/valparai.jpg'
import Aliyar from '../TravelBooking/Travelimages/aliyar.jpg'
import {  useNavigate } from 'react-router-dom'

export default function Coimbatore() {
    const[from,setFrom]=useState('')
    const[start,setStart]=useState('')
    const[end,setEnd]=useState('')
    const[members,setMembers]=useState('')
    const[total,setTotal]=useState('')
    const[details,setDetails]=useState(false)
    const[popup,setPopup]=useState(false)
    const[days,setDays]=useState('')


    const navigate=useNavigate()
    const handleCar=()=>{
        navigate('/booktaxi')
    }
    
    const handleStart=()=>{
      setDetails(true)
    }
    const handleClick=()=>{
      const starts = new Date(start)
      const ends = new Date(end)
      const differentinmillisecond = ends.getTime()-starts.getTime()
      const difference = Math.abs(differentinmillisecond /(1000*3600*24))
      const total = difference*250
      setTotal(total*members)
      setPopup(true)
      setDays(`${difference}`)
    }
  return (
    <div>
          {details &&
      <div className='search-bar'>
        
        <input className='start-date' value={from} placeholder='FROM' onChange={(e)=>setFrom(e.target.value)} type='text' />
        
        <input className='start-date' value={start} placeholder='Start' onChange={(e)=>setStart(e.target.value)} type='date'/>
        
        <input className='start-date' value={end} placeholder='End' onChange={(e)=>setEnd(e.target.value)} type='date'/>
       
        <input className='start-date' onChange={(e)=>setMembers(e.target.value)} placeholder='Members' type='number'/>
        <button className='choose-btn' onClick={handleClick}>BSearch</button>
        
      </div>

}
{popup && 
     <div>
       <ul>
        <li>start date:{start}</li>
        <li>end date:{end}</li>
        <li>no of members:{members}</li>
        <li>no of days:{days}</li>
        <li>total amount:{total}</li>
        

        </ul>
        <button onClick={handleCar}>Choose cab</button>    
     </div>
}
      <fieldset>
            <legend><h2>Places to visit in Kodaikanal</h2></legend>
            <div className='trip-btn'>
            <button className='package-btn' onClick={handleStart}>Trip package</button>
            </div>

            <div className='kodai-page'>
        <div className='card'>
            <div class="image-box">
                <img src={isha} alt='pine-forest-img'/>
            </div> 
            <div className='content'>
            <h2>Isha</h2>
                <p>The Pine Forest of Kodaikanal was cultivated by one Mr. Bryant about a century ago and today, it happens to be one of the most visited places in the hill station. The Pine Forest attracts a multitude of tourists from all over. Needless to say, that the very sight of umpteen number of pine trees standing tall make for an amazing sight. While on a tour of Kodaikanal, make sure that you visit the Pine Forest.
                </p>
            </div>
            </div>

            <div className='card'>
            <div class="image-box">
            <img src={kutralam} alt='pillar-rocks-img'/>
            </div> 
            <div className='content'>
            <h2>Kutralam</h2>
                <p>One of the best sightseeing places of Kodaikanal, the Pillar Rocks offer stunning beauty of the natural vistas around. The place derived its name from three rocks that stand almost vertical, looming high and almost piercing the sky at a height of 400 feet. Fog and mist often play hide and seek with the pillars, thus making scene look almost ethereal. Do remember to visit Pillar Rocks while on a tour of Kodaikanal.
                </p>
            </div>
            </div>
        </div>


        <div className='kodai-page'>
            <div className='card'>
            <div class="image-box">
            <img src={valparai} alt='poombarai-village-view-img'/>
            </div> 
            <div className='content'>
            <h2>valpari</h2>
                <p>If you want to enjoy a scenic hike and catch glimpse of clouds playing hide and seek with terraced valleys-a trip to the Poombarai Village View point is a must. Poomabrai village is famous for its production of garlic. Standing secluded at 1920 metres above sea-level, the Poombarai village offers picturesque views of the surrounding vistas. One can spend hours gazing at the natural beauty and taste some local produce like carrots and beans.
                </p>
            </div>
            </div>



            <div className='card'>
            <div class="image-box">
            <img src={Aliyar} alt='guna-caves-img'/>
            </div> 
            <div className='content'>
            <h2>Aliyar</h2>
                <p>One of the most interesting tourist places to visit in Kodaikanal is the Guna Caves. Named after a famed Kamal Hassan starrer Tamil movie Guna, the caves are a must visit place for nature lover and adventure seekers. The region was a well-known hiking trail and after the movie was shot, it came to be known as Guna Caves. A trip to this intriguing cave can help you create beautiful memories
                </p>
            </div>
            </div>
            </div>
    </fieldset>
    </div>
  )
    }
