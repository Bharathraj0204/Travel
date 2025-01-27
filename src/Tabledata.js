import React from 'react'
import Form from './Form'

export default function Tabledata (props) {

  return (
    
    <>
    {table&&
        <table>
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>JOB</th>
      </tr>
      {list.map(x=>(<Form id={x.id} name={x.name} job={x.job} />))}
      <tr>
        <td>{x.id}</td>
        <td>{x.name}</td>
        <td>{x.job}</td>
      </tr>
    </table>
</>
)
}
    
      
      
   
