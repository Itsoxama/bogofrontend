
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import React from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Terms from './Components/Terms/Terms';
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa'

import grouplogo from "./images/Group216.png"
import Contact from './Components/contact/Contact';
import Dashboard from './Components/dashboard/Dashboard';
import { useEffect, useState } from 'react';
import Package from './Components/dashboard/Package';
import Orders from './Components/dashboard/Orders';
import Profile from './Components/dashboard/Profile';
import Details from './Components/Details/Details';

import Details2 from './Components/Details/Details2';
import Calculate from './Components/Calculate/Calculate';
function App() {
  const [footer, setfooter] = useState("footer")

  useEffect(() => {
  

    return () => {

    }
  }, [])

  return (
    <>
      <Header />




      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/terms' element={<Terms />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/packages' element={<Package />} />
          <Route exact path='/ordershistory' element={<Orders />} />
          <Route exact path='/settings' element={<Profile />} />
          <Route exact path='/package-details' element={<Details />} />
          <Route exact path='/package-details2' element={<Details2 />} />
          <Route exact path='/calculate/:id' element={<Calculate />} />


        </Routes>
      </BrowserRouter>


      <div className={footer}>
        <div className="subfooter">
          <div className="footer1">
            <img src={grouplogo} alt="" />
            <div className="texts">
              <h1 onClick={e=>window.location.pathname='contact'}>Contact</h1>
              <h1 onClick={e=>window.location.pathname='terms'}>Terms & Conditions</h1>
            </div>
          </div>
          <div className="footer2">
            <h1>© 2022 Сompany Name. All rights reserved.</h1>
            <div className="social">

              <FaTwitter className='sicon' />
              <FaLinkedin className='sicon' />
              <FaFacebook className='sicon' />

            </div>
          </div>

        </div>

      </div>




    </>
  );
}

export default App;
