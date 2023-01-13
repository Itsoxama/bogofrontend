import React from 'react'
import grouplogo from "../../images/Group216.png"
import "./Header.css"
import { BiCloset, BiMenu, BiX } from 'react-icons/bi'
import { TbBrandBitbucket } from 'react-icons/tb'
import { FiHome, FiFile } from 'react-icons/fi'
import { RiSettings5Line } from 'react-icons/ri'
import { BiHide } from 'react-icons/bi'
import axios, { Axios } from 'axios'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { IoCloseSharp } from 'react-icons/io5'
import { useState } from 'react'
import { useEffect } from 'react'
import * as t from '../apis'
const headers = {
  apikey: t.apikey,
  apisecret: t.apisecret
}

const tx = {
  backedlink: "http://89.33.44.187"
}
const Header = () => {
  const [k, setk] = useState(0)
  useEffect(() => {
    var a = window.location.pathname
    if (a.search('settings') >= 0 || a.search('ordershistory') >= 0 || a.search('packages') >= 0 || a.search('dashboard') >= 0) {
      setk(1)

    }

    return () => {

    }
  }, [])


  const [i, seti] = useState(0)
  const [nav, setnav] = useState('nav2')
  const [login, setlogin] = useState('loginbox2')
  const [signup, setsignup] = useState('loginbox2')
  const [pr, setpr] = useState('loginbox2')
  const [fg, setfg] = useState('loginbox2')
  function setnav2() {
    if (i === 0) {
      setnav('nav')
      seti(1)
    }
    else {

      setnav('nav2')
      seti(0)
    }
  }
  function close(val) {

    if (val === 'loginbox') {

      setlogin('loginbox2')
    }


  }


  function open(val) {
    if (val === 'loginbox2') {
      setlogin('loginbox')

    }


  }

  function openx(val) {

    setlogin('loginbox')
    setfg('loginbox2')




  }
  function close2(val) {

    setsignup('loginbox2')

  }


  function open2(val) {

    setsignup('loginbox')

  }
  function openfp() {
    setlogin('loginbox2')
    setfg('loginbox')
  }

  function openfo() {
    setpr('loginbox')
    setfg('loginbox2')
  }
  const [currselect, setcurrselect] = useState('cursel2')

  const [currselect2, setcurrselect2] = useState('cursel2')

  const [currselect3, setcurrselect3] = useState('cursel2')

  const [currselect4, setcurrselect4] = useState('cursel2')

  useEffect(() => {
    if (window.location.pathname.search('orders') >= 1) {
      setcurrselect('cursel')
      setcurrselect2('cursel2')
      setcurrselect3('cursel2')
      setcurrselect4('cursel2')
    }

    if (window.location.pathname.search('dashb') >= 1) {
      setcurrselect('cursel2')
      setcurrselect2('cursel')
      setcurrselect3('cursel2')
      setcurrselect4('cursel2')
    }

    if (window.location.pathname.search('packages') >= 1) {
      setcurrselect('cursel2')
      setcurrselect2('cursel2')
      setcurrselect3('cursel')
      setcurrselect4('cursel2')
    }

    if (window.location.pathname.search('settings') >= 1) {
      setcurrselect('cursel2')
      setcurrselect2('cursel2')
      setcurrselect3('cursel2')
      setcurrselect4('cursel')
    }

    return () => {

    }

  }, [])



var allcountries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [country, setcountry] = useState('')
  const [phone, setphone] = useState('')
  const [loginemail, setloginemail] = useState('')
  const [loginpassword, setloginpassword] = useState('')
  const [resetemail, setresetemail] = useState('')
  async function userSignup() {

    if (name.length === 0 || email.length === 0 || phone.length === 0 || country.length === 0 || password.length === 0) {

      if (email.length === 0) {
        setsignupeb('red')
      }
      else {

        setsignupeb('rgb(231, 228, 228)')
      }
      if (name.length === 0) {
        setsignupnb('red')
      }
      else {

        setsignupnb('rgb(231, 228, 228)')
      } if (phone.length === 0) {
        setsignupmb('red')
      }
      else {

        setsignupmb('rgb(231, 228, 228)')
      } if (country.length === 0) {
        setsignupcb('red')
      }
      else {

        setsignupcb('rgb(231, 228, 228)')
      } if (password.length === 0) {
        setsignuppb('red')
      }
      else {

        setsignuppb('rgb(231, 228, 228)')
      }

    }

    else {


      await axios.post(`${t.backedlink}api/signup/findbyemail`, {
        headers: headers,
        email: email,



      })
        .then( async function (response) {
          console.log(response)
          if (response.data === 'invalid') {
           
      await axios.post(`${t.backedlink}api/signup/add`, {
        headers: headers,
        name: name,
        email: email,
        phone: phone,
        country: country,
        password: password,



      })
        .then(function (response) {
          setsignup('loginbox2')
          setlogin('loginbox')
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
          }
          else {
            console.log('user Already exist');
            alert("user Already exist")

          }
        })
        .catch(function (error) {
          console.log(error);
        });


    }

  }
  async function Userlogin() {


    if (loginemail.length === 0 || loginpassword.length === 0) {


      if (loginemail.length <= 0) {
        setlogineb('red')
      }
      else {
        setlogineb('rgb(231, 228, 228)')

      }
      if (loginpassword.length <= 0) {
        setloginpb('red')
        setfgpb('red')


      }
      else {

        setloginpb('rgb(231, 228, 228)')
      }
    }
    else {
      setfgpb('rgb(231, 228, 228)')
      setlogineb('rgb(231, 228, 228)')

      setloginpb('rgb(231, 228, 228)')
      await axios.post(`${t.backedlink}api/signup/login`, {
        headers: headers,
        email: loginemail,
        pass: loginpassword,



      })
        .then(function (response) {
          console.log(response)
          if (response.data === 'invalid') {
            console.log('user not exist');
            alert("Invalid Credentials")
          }
          else {

            for (var t = 0; t < 2; t++) {
              if (t === 0) {

                localStorage.setItem("Userkey", `$0-9-3988300Sdf0999i84_$${response.data.User._id}_$${response.data.User.email}`)

              }
              else {
                window.location.pathname = '/dashboard'

              }

            }
            console.log(response);

          }
        })
        .catch(function (error) {
          console.log(error);
        });

    }


  }
  const [authenticated, setauthenticated] = useState(false)
  useEffect(() => {
    var key = localStorage.getItem('Userkey')
    console.log(key)
    if (key && key.search('0-9-3988300Sdf0999i84') >= 0) {
      console.log(key.split('_$'))
      setauthenticated(true)

    }
    else {
      setauthenticated(false)

    }
    return () => {

    }
  }, [])
  async function resetpassword() {
    if (resetemail.length === 0) {
      setfgeb('red')
    }
    else {
      setfgeb('rgb(231, 228, 228)')
      await axios.post(`${t.backedlink}api/signup/resetpassword`, {
        headers: headers,
        email: resetemail,

      })
        .then(function (response) {

          console.log(response)
          openfo()
          setloginemail(resetemail)
        })
        .catch(function (error) {
          console.log(error);
        });

    }

  }
  function gotosignup() {
    setlogin('loginbox2')
    setsignup('loginbox')
  }
  function gotologin() {

    setlogin('loginbox')
    setsignup('loginbox2')
  }


  const [logineb, setlogineb] = useState('rgb(231, 228, 228)')
  const [loginpb, setloginpb] = useState('rgb(231, 228, 228)')
  const [signupnb, setsignupnb] = useState('rgb(231, 228, 228)')
  const [signupeb, setsignupeb] = useState('rgb(231, 228, 228)')
  const [signuppb, setsignuppb] = useState('rgb(231, 228, 228)')
  const [signupcb, setsignupcb] = useState('rgb(231, 228, 228)')
  const [signupmb, setsignupmb] = useState('rgb(231, 228, 228)')
  const [fgeb, setfgeb] = useState('rgb(231, 228, 228)')
  const [typep, settypep] = useState('password')
  const [typep2, settypep2] = useState('password')
  const [fgpb, setfgpb] = useState('rgb(231, 228, 228)')
  function logout() {
    window.location.pathname = '/dashboard'

  }
  
  function logoutx() {
    
    localStorage.removeItem('Userkey')
    window.location.pathname='/'
      
    }
  return (

    <>

      <div className={signup}>
        <div className="sublogin">
          <div className="siblogin2">
            <h1>Sign up</h1>
            <IoCloseSharp className='io' onClick={e => close2('loginbox')} />
            <h2>Welcome! Please enter your details.</h2>
            <h3>Full Name</h3>
            <input style={{ borderColor: signupnb }} onChange={e => setname(e.target.value)} placeholder='Enter your full name' type="text" />

            <h3>Phone Number</h3>
            <input style={{ borderColor: signupmb }} onChange={e => setphone(e.target.value)} placeholder='Enter your phone Number' type="text" />

            <h3>Country</h3>
            <select className='select7' style={{ borderColor: signupcb }} onChange={e => setcountry(e.target.value)}>

              <option value=''>Select Your Country</option>
              {
                allcountries.map(val => (


                  <option value={val}>{val}</option>

                ))
              }
            </select>

            <h3>Email</h3>
            <input autoComplete='off' style={{ borderColor: signupeb }} onChange={e => setemail(e.target.value)} placeholder='Enter your Email' type="email" />

            <h3 >Password</h3>
            <div style={{ marginBottom: '25px', borderColor: signuppb }} className="input">
              <input onChange={e => setpassword(e.target.value)} hidden={false} type={typep2} />
              <BiHide onClick={e=>{typep2==='password'?settypep2('text'):settypep2('password')}} className='bihide' />
            </div>

            <button onClick={e => userSignup()} className='signupbtn2'>Sign up</button>
            <h4>Already have an account?<strong style={{ fontStyle: "normal" }} onClick={e => gotologin()}> Log in</strong> </h4>
          </div>

        </div>


      </div>
      <div className={login}>
        <div className="sublogin">
          <div className="siblogin2">
            <h1>Log in</h1>
            <IoCloseSharp className='io' onClick={e => close('loginbox')} />
            <h2>Welcome back! Please enter your details.</h2>
            <h3>Email</h3>
            <input style={{ borderColor: logineb }} onChange={e => setloginemail(e.target.value)} placeholder='Enter your email' type="text" />
            <h3>Password</h3>
            <div className="input" style={{ borderColor: loginpb }}>
              <input placeholder='Enter your password' onChange={e => setloginpassword(e.target.value)} type={typep} />
              <BiHide onClick={e=>{typep==='password'?settypep('text'):settypep('password')}} className='bihide' />
            </div>
            <div className="remember">
              <div className="start2">
                <input type="checkbox" />
                <h1>Remember me</h1>
              </div>
              <h1 onClick={e => openfp()} style={{ cursor: "pointer" }}>Forgot Password</h1>
            </div>
            <button className='signupbtn2' onClick={e => Userlogin()} >Login</button>
            <h4>Don't have an account?<strong style={{ fontStyle: "normal" }} onClick={e => gotosignup()}> Sign up</strong> </h4>
          </div>

        </div>


      </div>
      <div className={fg}>
        <div className="sublogin">
          <div className="siblogin2">
            <h1>Forgot password?</h1>
            <IoCloseSharp className='io' onClick={e => setfg('loginbox2')} />
            <h2>No worries, we’ll send you reset instructions.</h2>
            <h3>Email</h3>
            <input onChange={e => setresetemail(e.target.value)} style={{ borderColor: fgeb, marginBottom: "25px" }} placeholder='Enter your email' type="text" />


            <button className='signupbtn2' onClick={e => resetpassword()}>Reset Password</button>

            <h4 style={{ cursor: 'pointer' }} onClick={e => openx('loginbox2')}><BsArrowLeft fontSize={20} style={{ marginRight: '5px' }} />   Back to log in </h4>
          </div>

        </div>


      </div>
      <div className={pr}>
        <div className="sublogin">
          <div className="siblogin2">
            <h1>Password reset</h1>
            <IoCloseSharp className='io' onClick={e => setpr('loginbox2')} />
            <h2>If an account exists for {
              resetemail &&
              resetemail

            } we have sent a new password to your email.</h2>

            <h3>Password</h3>
            <div className="input" style={{ borderColor: fgpb, marginBottom: '25px' }}>
              <input onChange={e => setloginpassword(e.target.value)} type="password" />
              <BiHide className='bihide' />
            </div>


            <button onClick={e => Userlogin()} className='signupbtn2'>Log in</button>

            <h4>Didn't recieve the email?<strong style={{ fontStyle: "normal" }}> Click to resend</strong> </h4>
          </div>

        </div>


      </div>


      <div className="header">
        <div className={nav}>

          <h1 onClick={e => window.location.href = '/contact'}>Contact</h1>
          <h1 onClick={e => window.location.href = '/terms'}>Terms and conditions</h1>

          <div className="dashmenu">
            {authenticated?
            <>
            <h1 onClick={e => window.location.pathname = 'ordershistory'} className={currselect}> <FiFile fontSize={22} className='fifi' /> Orders History</h1>
            <h1 onClick={e => window.location.pathname = 'dashboard'} className={currselect2}    ><FiHome fontSize={22} className='fifi' /> Saved Addresses</h1>
            <h1 onClick={e => window.location.pathname = 'packages'} className={currselect3} > <TbBrandBitbucket fontSize={22} className='fifi' /> Saved Packages</h1>
            <h1 className={currselect4} onClick={e => window.location.pathname = 'settings'}> <RiSettings5Line fontSize={22} className='fifi' /> Profile Settings</h1>
            
           <button className='signbtn signx' onClick={e => logoutx()} >Logout</button>
           </>:
           <div className='buttonss'>
           
           <button className='loginbtn' onClick={e => open('loginbox2')} >Login</button>
           <button className='signbtn' onClick={e => open2('loginbox2')} >Sign up</button>
</div>
            }
          


          </div>

        </div>

        <div className="subheader">

          <div className="header1">
            <img onClick={e => window.location.href = '/'} src={grouplogo} alt="" />
            <h1 onClick={e => window.location.href = '/contact'}>Contact</h1>
            <h1 onClick={e => window.location.href = '/terms'}>Terms and conditions</h1>



          </div>
          <div className="header2">
            {!authenticated ?
              <>
                <button className='loginbtn' onClick={e => open('loginbox2')} >Login</button>
                <button className='signbtn' onClick={e => open2('loginbox2')} >Sign up</button>

              </> :


              <button className='signbtn' onClick={e => logout()} >Dashboard</button>

            }
          </div>
          <div className="mobile">
            <img onClick={e => window.location.href = '/'} src={grouplogo} alt="" />
            {i === 0 ?

              <BiMenu fontSize={30} style={{ cursor: 'pointer' }} onClick={e => setnav2('nav')} />
              :

              <BiX fontSize={30} style={{ cursor: 'pointer' }} onClick={e => setnav2('nav')} />

            }
          </div>
        </div>
      </div>

    </>
  )
}

export default Header
