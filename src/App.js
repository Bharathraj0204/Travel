// // // 
import './TravelBooking/Travel.css'
import { Route, Routes } from "react-router-dom";

// import Studentslist from "./Studentslist";

import Signup from './TravelBooking/Signup';
import Login from './TravelBooking/Login';
import Aboutus from './TravelBooking/Aboutus';
import Admin from './TravelBooking/Admin';
import Kodaikanal from './Kodaikanal';
import Aut from "./TravelBooking/Aut";
import Hotel from "./TravelBooking/Hotel";
import Navbar from './TravelBooking/Navbar';
import Home from './TravelBooking/Home';
import Coimbatore from './TravelBooking/Coimbatore';
import Ooty from './TravelBooking/Ooty';
import Kodai from './TravelBooking/Kodai';
import Booktaxi from './Booktaxi';


function App() {




  return (
    <div>



  <Navbar />

      <Aut>

      <Routes> 

          <Route path='/signup' element={<Signup/>}/>
 <Route path='/login' element={<Login/>}/>
 <Route path='/' element={<Home/>}/>
 <Route path='/hotel' element={<Hotel/>}/>
 <Route path='/aboutus' element={<Aboutus/>}/>
<Route path='/coimbatore' element={<Coimbatore/>}/>
<Route path='/ooty' element={<Ooty/>}/>
<Route path='/kodai' element={<Kodai/>}/>
<Route path='/booktaxi' element={<Booktaxi/>}/>
  <Route path='/admin' element={<Admin/>}/>
<Route path='/kodaikanal' element={<Kodaikanal/>}/>
</Routes> 
  
       </Aut>  

    
    </div>
  )
}








export default App;
