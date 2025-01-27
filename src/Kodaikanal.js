import React from 'react'
import kodai2 from '../src/images/kodai2.jpg'

export default function Kodaikanal() {
  return (
    <div>
    
  <img src={kodai2} className="card" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
  )
}
