import React from 'react'
import map from '../../images/Map.png'
import { FaCoins } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import { useState } from 'react'
const Contact = () => {
    
  const [fg, setfg] = useState('loginbox2')
  return (
    <div className="contact">
            <div className="paddress">
         <div className="address">
                <div className="add1">

<div className="subdb1 asd" >
<h1>Contact us</h1>
<h2 className='contacthead'>We’d love to hear from you</h2>
          
<h3>Our friendly team is always ready to help you.</h3>
          </div>

                </div>
                <div className="add2">
                <div className="subdbtext1">
                <div className="icon">
                  <HiOutlineLocationMarker className='facoin' />
                </div>
                <div className="content">

                  <h1>Office</h1>
                  <h2>100 Flinders Street, Melbourne VIC 3000 AU   </h2>
                </div>
              </div>
             
                </div>
            </div>
         </div>
        <div className="subcontact">
     
            <img src={map} alt="" />
            
    <div className='loginbox12'>
      <div className="sublogin mobilelogin" style={{paddingTop:"0px"}} >
        <div className="siblogin2 siblogin3" style={{width:'88%'}}>
          <h6>Contact us</h6>
          <h2 style={{width:'100%',textAlign:'center'}}>Our friendly team would love to hear from you.</h2>
          <div className="first">
            <div className="first1">
                <h1>First name</h1>
                <input type="text" placeholder='Enter your first name' />

            </div>
            <div className="first1">

            <h1>Last name</h1>
                <input type="text" placeholder='Enter your last name' />
            </div>
          </div>
          <h3>Email</h3>
          <input style={{marginBottom:"5px"}} placeholder='Enter your email' type="text" />
          <h3>Phone number</h3>
          <input style={{marginBottom:"0px"}} placeholder='Enter your email' type="text" />
          <h3>Message</h3>
          <textarea name="" style={{marginBottom:'40px'}} placeholder='Leave us a message...' id="" cols="30" rows="10"></textarea>
      
          <button className='signupbtn2'>Send message</button>
        </div>

      </div>


    </div>

        </div>
    </div>
  )
}

export default Contact