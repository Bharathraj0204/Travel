import React from 'react'

export default function Covai() {
    const [date1, setDate1]=useState('')
    const [date2, setDate2]=useState('')
    const [ calculate, setCalculate]=useState('')
    const [members,setMembers]=useState('')
    const [from,setFrom]=useState('')
    const [details,setDetails]=useState(false)
    const [popup,setPopup]=useState(false)
    const [amount,setAmount]=useState('')
    const handleClick =()=>{
        setPopup(true)
    }
    const handledate=()=>{
        
    }
  return (
    <div>
         <div>
     <fieldset>
        <legend><h2>Places to visit</h2></legend>
        <div class="container1">
            <div class="box">
        <button onClick={handleClick}>trip package</button>
        {popup && 
            <div>
            <div className='package'>
      <div>
        <label>From</label>
        <input type='text' value={from} onChange={(e)=>setFrom(e.target.value)}/>
        <label>Start:</label>
        <input type='date' value={date1} onChange={(e)=>{setDate1(e.target.value)}}/>
        <label>End:</label>
        <input type='date' value={date2} onChange={(e)=>{setDate2(e.target.value)}}/>
        <input type='number' placeholder='Members' value={members} onChange={(e)=>{setMembers(e.target.value)}}/>
        <button onClick={handledate}>BSearch</button>
       
        </div>
        </div>    
            </div>}
            {details && 
            <div>
                <h3>package details</h3>
                <ul>
                    <li>starting date:{date1}</li>
                    <li>Ending date: {date2}</li>
                    <li>No.of. members: {members}</li>
                    <li>{calculate}</li>
                    <li>Total trip amount:{amount}</li>
                </ul>
            </div>
            }
                <img src={isha} alt='isha-img'/>
                <h2>Isha Yoga Center</h2>
                <p>
                    The Isha Yoga Center situated at the foothills of Velliangiri, on the outskirts of Coimbatore, is the headquarters for Isha Foundation. Isha is a sacred space for self-transformation, where you can come dedicate time towards your inner growth. The center offers all four major paths of yoga - kriya (energy), gnana (knowledge), karma (action), and bhakti (devotion), drawing people from all over the world.</p>
            </div>
            <div class="box">
                <img src={kutralam} alt='kutralam-img'/>
                <h2>Kovai Coutralam</h2>
                <p>Kovai Kutralam is a scenic spot with a gentle waterfall originating on the Siruvani hill ranges. It is located on the western ghat mountain range that lies to the west of this city at a distance of about 32 kms from Coimbatore. The siruvani dam is just above this water fall and this place is under the control of state forest department</p>
            </div>
        </div>  
        <div class="container1">
            <div class="box">
                <img src={valparai} alt='valparai-img' />
                <h2>Valparai</h2>               
                <p>Valparai Hill station is located above 3500 feet height from the sea level on the Anamalai mountain range of the Western Ghats and is also one of the best  tourist places in Tamilnadu. At a distance of 64 km from Pollachi and 102 kms distance from Coimbatore. Valparai Hill station is pollution free heavenly land surrounded with full of tea estates.It stands majestically with Green Spread Mountains and picturesque forest all around. Travelling between Pollachi to Valparai is itself an exotic experience.</p>
            </div>
            <div class="box">
                <img src={Aliyar} alt='Aliyar-img' />
             <h2>Aliyar Dam</h2>
                <p>Aliyar Dam is a charming location surrounded by Annamali Hills with wonderful natural views. It is located between Pollachi and Valparai.At a distance of 64 Kms from Coimbatore, 24 Kms from Pollachi & 545 Kms from Chennai.
                Built across Aliyar River between 1959 and 1969, the primary purpose of the dam is to support irrigation for Pollachi and near by places for Agriculture purpose. The height of the dam is 81 meters. There is a well maintained park built at bottom of the Dam</p>
            </div>
        </div>  
    </fieldset>
  </div>
    </div>
  )
}
