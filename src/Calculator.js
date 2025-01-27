import {useState} from 'react'
function Calculator(){
    const[num,setNum]=useState('')

    
    

return(
    <> 
  <input type='text'  value={num}/><br></br>
  <button onClick={()=>{setNum(num+'1')}}>1</button>
  <button onClick={()=>{setNum(num+'2')}}>2</button>
  <button onClick={()=>{setNum(num+'3')}}>3</button><br></br>
  <button onClick={()=>{setNum(num+'4')}}>4</button>
  <button onClick={()=>{setNum(num+'5')}}>5</button>
  <button onClick={()=>{setNum(num+'6')}}>6</button><br></br>
  <button onClick={()=>{setNum(num+'7')}}>7</button>
  <button onClick={()=>{setNum(num+'8')}}>8</button>
  <button onClick={()=>{setNum(num+'9')}}>9</button><br></br>
  <button onClick={()=>{setNum(num+'0')}}>0</button>
  <button onClick={()=>{setNum(num+'+')}}>+</button>
  <button onClick={()=>{setNum(num+'-')}}>-</button><br></br>
  <button onClick={()=>{setNum(num+'*')}}>*</button>
  <button onClick={()=>{setNum(num+'/')}}>/</button>
  <button onClick={()=>{setNum(eval(num))}}>=</button><br></br>
  <button onClick={()=>{setNum('')}}>c</button>
  <input type='text' 
 
  </>
)
}
export default Calculator

  