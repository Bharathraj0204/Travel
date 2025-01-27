import React from 'react'
import radis from '../TravelBooking/Travelimages/HotelRadius.jpg'
import star from '../TravelBooking/Travelimages/star.png'
import ttdc from '../TravelBooking/Travelimages/ttdc.jpg'
import crown from '../TravelBooking/Travelimages/crown.jpeg'

export default function Hotel() {
    const handlecancel=()=>{
        alert('Cancelled Successfully')
    }
  return (
    <div className='hotel-page'>
        <div className="card mb-3 container-hotel" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={radis} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h1 className="card-title">RadissonBlu</h1>
        <p className="card-text"><strong>Location:</strong>Peelamedu<br/> <strong>Price:</strong><s>1700</s> <br/><strong>Offer:1500</strong> </p>
        <div className='review'>
        <img className='star' src={star} alt='star'/><br/>
        
        <button className='btn-hotel' >View </button><br/>
        <button className='cancel-hotel' onClick={handlecancel}>Free Cancelation</button>
        </div>
      </div>
    </div>
  </div>
</div>



<div className="card mb-3 container-hotel" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={ttdc} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h1 className="card-title">TTDC Hotel</h1>
        <p className="card-text"><strong>Location:</strong>Alandurai<br/> <strong>Price:</strong><s>1900</s> <br/><strong>Offer:1300</strong> </p>
        <div className='review'>
        <img className='star' src={star} alt='star'/><br/>
        
        <button className='btn-hotel' >View </button><br/>
        <button className='cancel-hotel' onClick={handlecancel}>Free Cancelation</button>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="card mb-3 container-hotel" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={crown} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h1 className="card-title">RadissonBlu</h1>
        <p className="card-text"><strong>Location:</strong>Peelamedu<br/> <strong>Price:</strong><s>1700</s> <br/><strong>Offer:1500</strong> </p>
        <div className='review'>
        <img className='star' src={star} alt='star'/><br/>
        
        <button className='btn-hotel' >View </button><br/>
        <button className='cancel-hotel' onClick={handlecancel}>Free Cancelation</button>
        </div>
      </div>
    </div>
  </div>
</div>



<div className="card mb-3 container-hotel" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={radis} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h1 className="card-title">RadissonBlu</h1>
        <p className="card-text"><strong>Location:</strong>Peelamedu<br/> <strong>Price:</strong><s>1700</s> <br/><strong>Offer:1500</strong> </p>
        <div className='review'>
        <img className='star' src={star} alt='star'/><br/>
        
        <button className='btn-hotel' >View </button><br/>
        <button className='cancel-hotel' onClick={handlecancel}>Free Cancelation</button>
        </div>
      </div>
    </div>
  </div>
</div>



<div className="card mb-3 container-hotel" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={radis} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h1 className="card-title">RadissonBlu</h1>
        <p className="card-text"><strong>Location:</strong>Peelamedu<br/> <strong>Price:</strong><s>1700</s> <br/><strong>Offer:1500</strong> </p>
        <div className='review'>
        <img className='star' src={star} alt='star'/><br/>
        
        <button className='btn-hotel' >View </button><br/>
        <button className='cancel-hotel' onClick={handlecancel}>Free Cancelation</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
