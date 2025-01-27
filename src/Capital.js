import React, { useState } from 'react'

export default function Capital() {
    const[first,setFirst]=useState('')
    const handleSubmit=(country)=>{
       switch(country){
        case 'USA': setFirst(<div>
            <p>USA<br></br>
            Captial:Washington</p>
        </div>)
        break;
        case 'United Kingdom': setFirst(<div>
            <p>United Kingdom<br></br>
            Captial:London</p>
        </div>)
        break;
        case 'France': setFirst(<div>
            <p>France<br></br>
            Captial:Paris</p>
        </div>)
        break;
        case 'Germany': setFirst(<div>
            <p>Germany<br></br>
            Captial:Berlin</p>
        </div>)
        break;
        case 'Japan': setFirst(<div>
            <p>Japan<br></br>
            Captial:Tokyo</p>
        </div>)
        break;
       }
       
    }
  return (
    <div>
       <h1>Countries and Capitals</h1> 
       <button onClick={()=>handleSubmit('USA')}>USA</button><br></br>
       <button onClick={()=>handleSubmit('United Kingdom')}>United Kingdom</button><br></br>
       <button onClick={()=>handleSubmit('France')}>France</button><br></br>
       <button onClick={()=>handleSubmit('Germany')}>Germany</button><br></br>
       <button onClick={()=>handleSubmit('Japan')}>Japan</button>
        {first}
    </div>
  )
}
