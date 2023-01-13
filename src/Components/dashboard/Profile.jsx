import React from 'react'
import { FiLogOut, FiSearch, FiEdit2, FiHome, FiFile } from 'react-icons/fi'
import { TbBrandBitbucket } from 'react-icons/tb'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import asd from '../../images/asdw.jpg'
import { RiSettings5Line } from 'react-icons/ri'
import { IoCloseSharp } from 'react-icons/io5'
import { useState } from 'react'
import { useEffect } from 'react'
import { GrLinkPrevious } from 'react-icons/gr'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RiDeleteBinLine } from 'react-icons/ri'
import ReactPaginate from 'react-paginate';
import visa from '../../images/visa.png'
import card from '../../images/card.png'
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai'
import mc from '../../images/mc.png'
import { HiOutlineMail } from 'react-icons/hi'
import { FiDownloadCloud } from 'react-icons/fi'
import { BsCalendar, BsChevronDown } from 'react-icons/bs'
import axios from 'axios'
// Example items, to simulate fetching from another resources.
import * as t from '../apis'
const headers = {
    apikey: t.apikey,
    apisecret: t.apisecret
}

const Profile = ({ itemsPerPage }) => {
const [fullname, setfullname] = useState('')
const [cardnumber, setcardnumber] = useState('')
const [holdername, setholdername] = useState('')
const [cvv, setcvv] = useState('')
const [expiry, setexpiry] = useState('')

    function setaddpackagess() {
        axios.post(`${t.backedlink}api/card/add`,{
            headers:headers,
            user_id:userdata._id,
            cardnumber:cardnumber,
            cvv:cvv,
            expiry:expiry,
            name:holdername
            
        }).then(res=>{
        console.log(res)
    })
        setaddpackage('package2')
        setaddpackage2('packagen')





    }

    function setaddpackagess2() {
        setaddpackage('package2')
        setaddpackage3('packagen')

    }

    const [userdata, setuserdata] = useState()
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const [country, setcountry] = useState('')
const [phone, setphone] = useState('')
const [secondname, setsecondname] = useState('')
function updateuser() {
    axios.post(`${t.backedlink}api/signup/updateuser`,{
        headers:headers,
        _id:userdata._id,
        email:email,
        phone:phone,
        country:country,
        name:name+' '+secondname,
        password:password
    }).then(res=>
        
        {
            window.location.reload()
            console.log(res)
        
        })
    
}
const [cards, setcards] = useState()
    useEffect(() => {


        var key = localStorage.getItem('Userkey')
        console.log(key)
        if (key && key.search('0-9-3988300Sdf0999i84') >= 0) {
            var k = key.split('_$')

            axios.post(`${t.backedlink}api/signup/find`, {
                headers: headers,
                _id: k[1],
            }).then(res => {
                axios.post(`${t.backedlink}api/card/find`, {
                    headers: headers,
                    _id: k[1],
                }).then(res => {
                    setcards(res.data.Card)
                
                console.log(res)
                })    


                console.log(res)
                setuserdata(res.data.User)
                setname(res.data.User.name)

                var x=res.data.User.name.split(' ')
                console.log(x)
                setfullname(res.data.User.name)
                setname(x[0])
                if(x[1]||x[2]){
                    x.forEach((element,index) => {
                        if(index===0){
                            
                        } else{
                            console.log(x[index])
                    setsecondname(secondname=>secondname+' '+x[index])   
                        }
                    });

                }
                
                setemail(res.data.User.email)
                
                setpassword(res.data.User.password)
                setcountry(res.data.User.country)
                setphone(res.data.User.phone)
            })
        }
        else {
            window.location.pathname = '/'

        }

        return () => {

        }
    }, [])

    function logout() {

        localStorage.removeItem('Userkey')
        window.location.pathname = '/'

    }
    const [currselect, setcurrselect] = useState('cursel')
    const [addpackage, setaddpackage] = useState("package2")
    const [addpackage2, setaddpackage2] = useState("package2")
    const [addpackage3, setaddpackage3] = useState("package2")
    const [emaild, setemaild] = useState('')
    const [passd, setpassd] = useState('')


    function deleteacc() {
        axios.post(`${t.backedlink}api/signup/delete`, {
            headers: headers,
            email: emaild,
            password: passd
        }).then(res => {
            console.log(res)
            if (res.data === 'invalid') {
                alert('Invalid email or password')
            } else {
                logout()
            }

        })

    }
    const [actiontype, setactiontype] = useState('Add')
    function setaddpackageupdate() {
        axios.post(`${t.backedlink}api/card/update`,{
            headers:headers,
            name:holdername,
            cardnumber:cardnumber,
            cvv:cvv,
            expiry:expiry,
            _id:cardid

        }).then(res=>{
            console.log(res)
            window.location.reload()
        })
    }
    function setaddpackage2x() {
        
        setholdername('')
        setcvv('')
        setexpiry('')
        setcardnumber('')
        setactiontype('Add')
        setaddpackage('packagen')


    }
    const [cardid, setcardid] = useState('')
    function setaddpackage1(val) {
        setcardid(val._id)
        setholdername(val.name)
        setcvv(val.cvv)
        setexpiry(val.expiry)
        setcardnumber(val.cardnumber)

        setactiontype('Update')
        setaddpackage('packagen')



    }
    return (
        <>
            {userdata &&
                <div className="dashboard">
                    <div className={addpackage}>
                        <div className="packagesub">

                            <IoCloseSharp className='io' onClick={e => setaddpackage('package2')} />

                            <img src={card} alt="" />
                            <h1>Update payment method</h1>
                            <h5>Update your card details.</h5>
                            <div className="addressbox">
                                <div className="addbox addbox3">
                                    <h4>Name on card</h4>
                                    <input value={holdername} onChange={e=>setholdername(e.target.value)} type="text" placeholder='Enter  name' />
                                </div>

                                <div className="addbox addbox4">
                                    <h4>Expiry</h4>
                                    <input value={expiry} onChange={e=>setexpiry(e.target.value)} type="text" placeholder='Enter Expiry' />
                                </div>
                                <div className="addbox addbox3">
                                    <h4>Card Number</h4>
                                    <input value={cardnumber} onChange={e=>setcardnumber(e.target.value)} type="number" placeholder='Card Number' />
                                </div>

                                <div className="addbox addbox4">
                                    <h4>CVV</h4>
                                    <input value={cvv} onChange={e=>setcvv(e.target.value)} type="number" placeholder='Enter CVV' />
                                </div>


                            </div>
                            <div className="buttons">
                                <button className='cancel' onClick={e => setaddpackagess2()}>Delete card</button>
                               {actiontype==='Add'?
                                <button className='submit' onClick={e => setaddpackagess()}>Add</button>
                                :
                                <button className='submit' onClick={e => setaddpackageupdate()}>Update</button>

                               }
                            </div>
                        </div>
                    </div>

                    <div className={addpackage2}>
                        <div className="packagesub packagesub2">

                            <IoCloseSharp className='io' onClick={e => setaddpackage2('package2')} />
                            <div className="iconxs">
                                <AiOutlineCheckCircle color='#12B76A' className='facoin facoin2' />

                            </div>
                            <h1 style={{ width: '80%', textAlign: 'center' }}>Your payment card
                                was successfully saved </h1>
                            <div className="buttons">
                                <button className='submit' onClick={e => window.location.reload()}>Ok</button>
                            </div>
                        </div>
                    </div>

                    <div className={addpackage3}>
                        <div className="packagesub packagesub2">

                            <IoCloseSharp className='io' onClick={e => setaddpackage2('package2')} />
                            <div className="iconxsx">
                                <RiDeleteBinLine color='#D92D20' className='facoin facoin5' />

                            </div>
                            <h1 style={{ width: '80%', textAlign: 'center' }}>Delete payment card </h1>
                            <h6>Are you sure you want to delete your payment card? This action cannot be undone.</h6>
                            <div className="buttons">
                                <button className='cancel' onClick={e => setaddpackage3('package2')}>Cancel</button>

                                <button className='submit' onClick={e => setaddpackage3('package2')}>Delete</button>
                            </div>
                        </div>
                    </div>
                    <div className="subdash">
                        <div className="subdash1">
                            <div className="dashmenu">
                                <h1 onClick={e => window.location.pathname = 'ordershistory'} > <FiFile fontSize={22} className='fifi' /> Orders History</h1>
                                <h1 onClick={e => window.location.pathname = 'dashboard'}    ><FiHome fontSize={22} className='fifi' /> Saved Addresses</h1>
                                <h1 onClick={e => window.location.pathname = 'packages'} > <TbBrandBitbucket fontSize={22} className='fifi' /> Saved Packages</h1>
                                <h1 onClick={e => window.location.pathname = 'settings'} className={currselect}> <RiSettings5Line fontSize={22} className='fifi' /> Profile Settings</h1>
                                <div className="email">
                                <div className="or">
                                    OR
                                </div>
                                <div className="emaildetails">
                                    <h1>{fullname&&fullname}</h1>
                                    <h3>{email}</h3>

                                </div>
                                <FiLogOut fontSize={15} onClick={e => logout()} />
                            </div>

                            </div>
                            <div className="feature">
                                <h1>New features available!</h1>
                                <h2>Check out our new updates. </h2>
                                <img src={asd} alt="" />
                                <span><h4>Dismiss</h4> <h3>Whats new?</h3></span>


                            </div>
                       
                        </div>
                        <div className="subdash2">
                            <div className="savedadd">
                                <h1>Profile Settings</h1>
                                <h4>Personal info</h4>
                                <h3>Update your personal details here.</h3>
                                <div className="firstfield">
                                    <h1>Name</h1>
                                    <span className='firstinpx'>
                                        <input onChange={e=>setname(e.target.value)} value={name} className='firstinp2' type="text" />

                                        <input value={secondname} onChange={e=>setsecondname(e.target.value)} className='firstinp2' type="text" />
                                    </span>
                                </div>
                                <div className="firstfield">
                                    <h1>Email address</h1>
                                    <input onChange={e=>setemail(e.target.value)}  value={email} className='firstfieldinput2' type="text" />
                                </div>
                                <div className="firstfield">
                                    <h1>Phone number</h1>
                                    <input onChange={e=>setphone(e.target.value)}  value={phone} className='firstfieldinput2' type="text" />
                                </div>


                                <h4>Password</h4>
                                <h3>Please enter your current password to change your password.</h3>
                                <div className="firstfield">
                                    <h1>Current Password</h1>
                                    <input onChange={e=>password(e.target.value)}  value={password} className='firstfieldinput2' type="password" />
                                </div>

                                <div className="firstfield">
                                    <h1>New password</h1>
                                    <input className='firstfieldinput2' type="password" />
                                </div>
                                <div className="firstfield" style={{ borderBottom: '1px solid #D0D5DD ', marginBottom: '25px' }}>
                                    <h1>Confirm new password</h1>
                                    <input className='firstfieldinput2' type="password" />
                                </div>
                                
                                <button className='updatedata' onClick={e=>updateuser()}>Update</button>
                                <div className="purnot">
                                    <div className="startpart">
                                        <div className="icon3">
                                            <HiOutlineMail fontSize={25} className='facoin' />


                                        </div>
                                        <div className="messagee">
                                            <h1>Stay up to date with the latest news and updates</h1>
                                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                                        </div>
                                    </div>
                                    <div className="endpart">

                                        <button>Subscribe</button>
                                        <IoCloseSharp className='ioc' />
                                    </div>
                                </div>

                                <h4>Notification settings</h4>
                                <h3>We may still send you important notifications about your account outside of your notification settings.</h3>
                                <div className="firstfield">
                                    <div className="parta">
                                        <h1>Notification settings</h1>
                                        <h2>These are notifications to remind you of updates you might have missed.</h2>

                                    </div>
                                    <div className="partb">

                                        <p style={{ marginRight: '30px' }} >
                                            <input type="radio" id="testx1" name="radio-group" checked />
                                            <label for="testx1">Send to my account email</label>
                                        </p>
                                        <p style={{ marginRight: '30px' }}>
                                            <input type="radio" id="testx2" name="radio-group" />
                                            <label for="testx2">Send to my account email</label>
                                        </p>
                                        <p>
                                            <input type="radio" id="testx3" name="radio-group" />
                                            <label for="testx3">
                                                Send to my account email</label>
                                        </p>

                                    </div>

                                </div>
                                <div className="firstfield">
                                    <div className="parta">
                                        <h1>SMS settings</h1>
                                        <h2>These are notifications to remind you of updates you might have missed.</h2>
                                    </div>
                                    <div className="partb">

                                        <p style={{ marginRight: '30px' }} >
                                            <input type="radio" id="testx1" name="radio-group" checked />
                                            <label for="testx1">Send to my account email</label>
                                        </p>

                                        <p>
                                            <input type="radio" id="testx3" name="radio-group" />
                                            <label for="testx3">
                                                Send to my account email</label>
                                        </p>

                                    </div>

                                </div>
                                <h4>Payment method</h4>
                                <h3>Update your billing details address.</h3>
                                <div className="firstfield">
                                    <div className="parta">
                                        <h1>Card details</h1>
                                        <h2>Select default payment method.</h2>
                                    </div>
                                    <div className="partb">
                                      {cards&&cards.map(val=>(
                                        <>
                                        {val.cardnumber.charAt(0)==='4'?
                                        <div className="purnot" style={{marginTop:'20px', alignItems: 'flex-start!important' }}>
                                            <div className="startpart">
                                                <div className="visadiv">

                                                    <img className='visa' src={visa} alt="" />
                                                </div>


                                                <div className="messagee">
                                                    <h1>Visa ending in {val.cardnumber.slice(-4)}</h1>
                                                    <h2>Expiry {val.expiry}</h2>
                                                    <span><h3>Set as default</h3> <h1 style={{ cursor: 'pointer' }} onClick={e => setaddpackage1(val)}>Edit</h1></span>
                                                </div>
                                            </div>
                                            <div className="endpart">

                                                <AiFillCheckCircle className='ioc' />
                                            </div>
                                        </div>
                                        :
                                        <div className="purnot2" style={{ alignItems: 'flex-start!important' }}>
                                        <div className="startpart">
                                            <div className="visadiv">

                                                <img className='visa' src={mc} alt="" />
                                            </div>


                                            <div className="messagee">
                                                <h1>Mastercard ending in {val.cardnumber.slice(-4)}</h1>
                                                <h2>Expiry  {val.expiry}</h2>

                                                <span><h3>Set as default</h3> <h1 style={{ cursor: 'pointer' }} onClick={e => setaddpackage1(val)}>Edit</h1></span>
                                            </div>
                                        </div>
                                        <div className="endpart">

                                            <AiFillCheckCircle className='ioc' />
                                        </div>
                                    </div>
                                        }
                                          
                                     
                                        </>
                                      ))

                                      }
                                        <h1 style={{ cursor: 'pointer' }} onClick={e => setaddpackage2x()}>+ Add new payment method</h1>


                                    </div>

                                </div>

                                <h4 className='downdata' style={{ paddingTop: '25px', borderTop: '1px solid #D0D5DD' }}>Data management settings <button><FiDownloadCloud /> Download my data</button></h4>
                                <h3 style={{ paddingBottom: '25px', borderBottom: '1px solid #D0D5DD' }}>Download your personal data. Use this button below to download all your data in .csv format.</h3>
                                <h4  >Delete your profile and personal data</h4>
                                <h3 style={{ paddingBottom: '25px', borderBottom: '1px solid #D0D5DD' }}>To delete your profile and personal data, enter your current password and click on the button below.</h3>
                                <div className="firstfield">
                                    <h1>Email address</h1>
                                    <input onChange={e => setemaild(e.target.value)} className='firstfieldinput2' type="text" />
                                </div>
                                <div className="firstfield">
                                    <h1>Password</h1>
                                    <input onChange={e => setpassd(e.target.value)} className='firstfieldinput2' type="password" />
                                </div>
                                <button onClick={e => deleteacc()} className='delete'>Delete</button>

                            </div>

                        </div>

                    </div>

                </div>}
        </>
    )
}

export default Profile