import React from 'react'
import { FiLogOut, FiSearch, FiEdit2, FiHome, FiFile, FiDelete } from 'react-icons/fi'
import { useState } from 'react'
import { useEffect } from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { BsPrinter } from 'react-icons/bs'
import { FiCopy } from 'react-icons/fi'
import ger from "../../images/german.jpg"
import { countries } from './states'
import axios from 'axios'
import * as tx from '../apis'
import toast, { Toaster } from 'react-hot-toast';

import { IoCloseSharp } from 'react-icons/io5'
const Details = ({ itemsPerPage }) => {


    function notify(val) {
        toast(val + ' is required.')
    }
    const [luggage, setluggage] = useState()
    const [jsonorder, setjsonorder] = useState()
    useEffect(() => {
        setjsonorder(JSON.parse(localStorage.getItem('orderinfo')))
        var t = localStorage.getItem('temppackage')
        var f = JSON.parse(t)
        setluggage(JSON.parse(t))
setsendercity(f.sendercity)
        setreccountry(f.destcountry)
        setstates([])
        var a4 = new FormData()
        a4.append('username', 'clienttest@fancourier.ro')
        a4.append('client_id', '323245')
        a4.append('user_pass', 'testareFAN')
        a4.append('judet', f.destcountry)
        var lk
        axios.post('https://www.selfawb.ro/all/export_distante_integrat.php', a4).then(res => {
            var ax = res.data.split("\n")
            console.log(ax)
            ax.forEach(element => {
                lk = element.split(',')
                if (lk[1] && lk[1].length >= 1) {
                    setstates(prevState => [...prevState, t]);
                    var t = lk[1].replaceAll('"', '')

                    setreccity(f.destcity)
                }

            });

        })
        setsendercountry(f.sendercountry)
        setstates2([])
        var a3 = new FormData()
        a3.append('username', 'clienttest@fancourier.ro')
        a3.append('client_id', '323245')
        a3.append('user_pass', 'testareFAN')
        a3.append('judet', f.sendercity)
        var l
       setreccity(f.destcity) 

        axios.post('https://www.selfawb.ro/all/export_distante_integrat.php', a3).then(res => {
            var ax = res.data.split("\n")
            console.log(ax)
            ax.forEach(element => {
                l = element.split(',')
                if (l[1] && l[1].length >= 1) {
                    var t = l[1].replaceAll('"', '')
                    setstates2(prevState => [...prevState, t]);
                    setsendercity(f.sendercity)

                }


            });

        })




        return () => {

        }
    }, [])


    function setoptionss(val1, val2, val3) {
        setoptions(val1)
        setimgs(val3)
        setname(val2)

    }
    function setoptionss2(val1, val2, val3) {
        setoptions2(val1)
        setimgs2(val3)
        setname2(val2)

    }
    const [imgs, setimgs] = useState(ger)
    const [options, setoptions] = useState('options2')
    const [name, setname] = useState("Germany")


    const [imgs2, setimgs2] = useState(ger)
    const [options2, setoptions2] = useState('options2')
    const [name2, setname2] = useState("Germany")

    function setaddpackagess() {
        setaddpackage('package2')
        setaddpackage2('packagen')

    }

    function setaddpackagess2() {
        setaddpackage('package2')
        setaddpackage3('packagen')

    }
    const [country, setcountry] = useState("Germany")
    const [states, setstates] = useState()

    const [states2, setstates2] = useState()
    useEffect(() => {

        var a = 'India'
        countries.forEach((val) => {
            if (val.country === a) {
                console.log(val.states)
                setstates2(val.states)
            }
        })

        return () => {

        }
    }, [])



    const [addpackage, setaddpackage] = useState("package2")
    const [addpackage2, setaddpackage2] = useState("package2")
    const [addpackage3, setaddpackage3] = useState("package2")


    var allcountries = ["Arad", "Arges", "Bacau", "Bihor", "Bistrita-Nasaud", "Botosani", "Braila", "Brasov", "Bucuresti", "Buzau", "Calarasi", "Caras-Severin", "Cluj", "Constanta", "Covasna", "Dambovita", "Dolj", "Galati", "Giurgiu", "Gorj", "Harghita", "Hunedoara", "Ialomita", "Iasi", "Ilfov", "Maramures", "Mehedinti", "Mures", "Neamt", "Olt", "Prahova", "Salaj", "Satu Mare", "Sibiu", "Suceava", "Teleorman", "Timis", "Tulcea", "Valcea", "Vaslui", "Vrancea"]

    const [email, setemail] = useState('')
    const [sendername, setsendername] = useState('')
    const [senderfirstname, setsenderfirstname] = useState('')
    const [sendercountry, setsendercountry] = useState('')
    const [sendercity, setsendercity] = useState('')
    const [senderpostalcode, setsenderpostalcode] = useState('')
    const [senderstreet, setsenderstreet] = useState('')
    const [sendernumber, setsendernumber] = useState('')
    const [sendercomments, setsendercomments] = useState('')
    const [recname, setrecname] = useState('')
    const [recfirstname, setrecfirstname] = useState('')
    const [reccountry, setreccountry] = useState('')
    const [reccity, setreccity] = useState('')
    const [recpostalcode, setrecpostalcode] = useState('')
    const [recstreet, setrecstreet] = useState('')
    const [recnumber, setrecnumber] = useState('')
    const [reccomments, setreccomments] = useState('')
    const [ept, setept] = useState('')







    function getcities(val) {

        setreccountry(val)
        setstates([])
        var a3 = new FormData()
        a3.append('username', 'clienttest@fancourier.ro')
        a3.append('client_id', '323245')
        a3.append('user_pass', 'testareFAN')
        a3.append('judet', val)
        var l
        axios.post('https://www.selfawb.ro/all/export_distante_integrat.php', a3).then(res => {
            var ax = res.data.split("\n")
            console.log(ax)
            ax.forEach(element => {
                l = element.split(',')
                if (l[1] && l[1].length >= 1) {
                    setstates(prevState => [...prevState, t]);
                    var t = l[1].replaceAll('"', '')

                }


            });

        })
    }

    function getcities2(val) {

        setsendercountry(val)
        setstates2([])
        var a3 = new FormData()
        a3.append('username', 'clienttest@fancourier.ro')
        a3.append('client_id', '323245')
        a3.append('user_pass', 'testareFAN')
        a3.append('judet', val)
        var l
        axios.post('https://www.selfawb.ro/all/export_distante_integrat.php', a3).then(res => {
            var ax = res.data.split("\n")
            console.log(ax)
            ax.forEach(element => {
                l = element.split(',')
                if (l[1] && l[1].length >= 1) {
                    var t = l[1].replaceAll('"', '')
                    setstates2(prevState => [...prevState, t]);

                }


            });

        })
    }


    function gotonext() {
        if (!email) {
            notify('Email')
        }
        else if (!sendernumber) {
            notify('Sender Number ')
        }

        else if (!sendercountry) {
            notify('Sender country ')
        }

        else if (!sendercity) {
            notify('Sender city ')
        }
        else if (!senderpostalcode) {
            notify('Sender postal code ')
        }

        else if (!senderstreet) {
            notify('Sender street ')
        }


        else if (!recnumber) {
            notify('Recipient Number ')
        }

        else if (!reccountry) {
            notify('Recipient country ')
        }

        else if (!reccity) {
            notify('Recipient city ')
        }
        else if (!recpostalcode) {
            notify('Recipient postal code ')
        }

        else if (!recstreet) {
            notify('Recipient street ')
        }

        else {

            var jsoninfo = {
                email: email,
                sendernumber: sendernumber,
                sendername: sendername,
                sendercountry: sendercountry,
                sendercity: sendercity,
                senderpostalcode: senderpostalcode,
                senderstreet: senderstreet,
                sendercomments: sendercomments,
                recnumber: recnumber,
                recname: recname,
                reccountry: reccountry,
                reccity: reccity,
                recpostalcode: recpostalcode,
                recstreet: recstreet,
                reccomments: reccomments,
                ept: ept,

            }


            localStorage.setItem('orderdetails', JSON.stringify(jsoninfo))
            window.location.pathname = 'package-details2'

        }

    }
    const [authenticated, setauthenticated] = useState(false)
    var headers = {
        apikey: tx.apikey,
        apisecret: tx.apisecret
    }

    const [addresses, setaddresses] = useState()
    const [packages, setpackages] = useState()
    useEffect(() => {

        var key = localStorage.getItem('Userkey')
        console.log(key)
        if (key && key.search('0-9-3988300Sdf0999i84') >= 0) {
            var t = key.split('_$')
            axios.post(`${tx.backedlink}api/addpackage/find`, {
                headers: headers,
                user_id: t[1],
            }).then(res => {
                console.log(res)
                setauthenticated(true)
                setpackages(res.data.Package)
            })

            axios.post(`${tx.backedlink}api/address/find`, {
                headers: headers,
                user_id: t[1],
            }).then(res => {
                console.log(res)
                setauthenticated(true)
                setaddresses(res.data.Address)
            })
        }
        else {
            setauthenticated(false)

        }
        return () => {

        }
    }, [])
    const [addtype, setaddtype] = useState('sender')
    function importadd(val) {
        if (val === 'sender') {
            setaddtype('sender')

            setimportress('addimport')
        } else {
            setaddtype('rec')

            setimportress('addimport')
        }


    }
    function importpak(index) {

        setimportress2('addimport')
        setindexs(index)



    }

    const [recaddtype, setrecaddtype] = useState('Individual')
    const [senderaddtype, setsenderaddtype] = useState('Individual')
    const [importress, setimportress] = useState('addimport2')
    const [importress2, setimportress2] = useState('addimport2')
    function importthis(val) {
        if (addtype === 'sender') {

            setsendercity(val.city)
            setsendercountry(val.country)
            setsendername(val.fullname)
            setsendernumber(val.number)
            setsenderpostalcode(val.postalcode)
            setsenderstreet(val.street)
            setimportress('addimport2')
        } else {

            setreccity(val.city)
            setreccountry(val.country)
            setrecname(val.fullname)
            setrecnumber(val.number)
            setrecpostalcode(val.postalcode)
            setrecstreet(val.street)
            setimportress('addimport2')
        }


    }
    const [indexs, setindexs] = useState(0)
    function importthis2(val) {

        seti(1)
        console.log(luggage)
        var r = luggage

        setluggage(null)
        r.measure[indexs].pieces = val.pieces
        r.measure[indexs].width = val.width
        r.measure[indexs].weight = val.weight
        r.measure[indexs].height = val.height
        r.measure[indexs].length = val.pieces

        setluggage(r)
        setimportress2('addimport2')
        console.log(luggage)


    }
    function skipluggage(index2) {
        var p = []
        seti(1)
        console.log(luggage)
        var r = luggage
        luggage.measure.forEach((val, index) => {

            if (index === index2) {
                console.log(index)
            }
            else if (index === luggage.measure.length - 1) {

                p.push(val)
                r.measure = p
                setluggage(r)
            }
            else {
                p.push(val)
            }
        }
        )


    }
    const [i, seti] = useState(0)
    useEffect(() => {
        seti(0)

        return () => {

        }
    }, [i])

    return (
        <>

            <div className="luggage">
                <div className="toas">

                    <Toaster />
                </div>
                <div className={importress}>
                    <div className="allimports">

                        <IoCloseSharp className='io' onClick={e => setimportress('addimport2')} />
                        {authenticated ?
                            <>
                                <h1>Saved Addresses</h1>

                                <div className="tablex">
                                    <>
                                        <div className="tablerow" >
                                            <div className="no2"></div>
                                            <h1 className='no no2' >No</h1>
                                            <h1 className='namew no2'>Company name</h1>
                                            <h1 className='addw no2'>Addresses</h1>

                                            <h1 className='no2'>Set as Default...</h1>
                                        </div>
                                        {addresses &&
                                            addresses.map((item, index) => (
                                                index % 2 != 0 ?
                                                    <div className="tablerow rowtable">
                                                        <button className='impbutton' onClick={e => importthis(item)} >Import</button>
                                                        <h1 className='no' >{item.no}</h1>
                                                        <h1 className='namew'>{item.fullname}</h1>
                                                        <h1 className='addw'>{item.addressname}</h1>
                                                        <h1><input type="checkbox" checked={item.addresstype === 'pickup'} /> Pickup address</h1>

                                                        <h1><input type="checkbox" checked={item.addresstype === 'delivery'} /> Delivery address</h1>
                                                        <h1><input type="checkbox" checked={item.addresstype === 'invoice'} /> Invoice address</h1>

                                                    </div> :
                                                    <div className="tablerow rowtable" style={{ backgroundColor: "#F9FAFB" }}>
                                                        <button className='impbutton' onClick={e => importthis(item)} >Import</button>
                                                        <h1 className='no' >{item.no}</h1>
                                                        <h1 className='namew'>{item.fullname}</h1>
                                                        <h1 className='addw'>{item.addressname}</h1>
                                                        <h1><input type="checkbox" checked={item.addresstype === 'pickup'} /> Pickup address</h1>

                                                        <h1><input type="checkbox" checked={item.addresstype === 'delivery'} /> Delivery address</h1>
                                                        <h1><input type="checkbox" checked={item.addresstype === 'invoice'} /> Invoice address</h1>

                                                    </div>
                                            ))}
                                    </>

                                </div>
                            </>
                            :
                            <>
                                <h3>No data to show </h3>

                            </>
                        }
                    </div>
                </div>
                <div className={importress2}>
                    <div className="allimports">

                        <IoCloseSharp className='io' onClick={e => setimportress2('addimport2')} />
                        {authenticated ?
                            <>
                                <h1>Saved Packages</h1>

                                <div className="tablex">
                                    <>
                                        <div className="tablerow" >
                                            <h1 className='no no2 no3' ></h1>
                                            <h1 className='namew no2'>Name</h1>
                                            <h1 className='addw no2'>Type</h1>

                                            <h1 className='no no2' >Quantity</h1>
                                            <h1 className='no no2' >Weight</h1>
                                            <h1 className='no no2' >Length</h1>
                                            <h1 className='no no2' >Width</h1>
                                            <h1 className='no no2' >Height</h1>
                                            <h1 className='no no2' >Contents</h1>
                                            <h1 className='no no2' >Value</h1>

                                        </div>
                                        {packages &&
                                            packages.map((item, index) => (


                                                <>
                                                    <div className="tablerow rowtable">
                                                        <button className='impbutton' onClick={e => importthis2(item)} >Import</button>

                                                        <h1 className='no' >{item.no}</h1>
                                                        <h1 className='namew'>{item.name}</h1>
                                                        <h1 className='addw'>{item.type}</h1>

                                                        <h1 className='no' >{item.quantity}</h1>
                                                        <h1 className='no' >{item.weight}</h1>
                                                        <h1 className='no' >{item.length}</h1>
                                                        <h1 className='no' >{item.width}</h1>
                                                        <h1 className='no' >{item.height}</h1>
                                                        <h1 className='no' >{item.contents}</h1>
                                                        <h1 className='no nob' >{item.value}</h1>



                                                    </div>



                                                </>



                                            ))}
                                    </>

                                </div>
                            </>
                            :
                            <>
                                <h3>No data to show </h3>

                            </>
                        }
                    </div>
                </div>
                <div className="sublug">
                    <div className="sublug1">
                        <div className="lugpart1">
                            <div className="lugbar">

                            </div>
                            <h1>Package/Delivery</h1>
                            <h2>Please provide package and delivery details</h2>

                        </div>
                        <div className="lugpart2">

                            <div className="lugbar2">

                            </div>
                            <h1>Extra services and Payments details</h1>
                            <h2>Please provide extra services and payment details</h2>

                        </div>

                    </div>
                    <div className="sublug2">
                        <div className="packet1">
                            <h1>Contact e-mail address</h1>
                            <h2>Email</h2>
                            <input type="text" onChange={e => setemail(e.target.value)} placeholder='Enter email ' />

                            <h3>Package details</h3>

                            {i === 0 && luggage && luggage.measure.map((val, index) => (
                                <>
                                    <h2 className='mty'>1.Package</h2>
                                    <div className="package">
                                        <div className="measure measure2">
                                            <h1>Piece</h1>
                                            <div className="box">
                                                <input value={val.pieces} className='inputcm' placeholder='1' type="text" />

                                            </div>
                                        </div>
                                        <div className="measure measure2">
                                            <h1>Length</h1>
                                            <div className="box">

                                                <input value={val.length} className='inputcm' placeholder='1' type="text" />
                                                <h1>cm</h1>
                                            </div>
                                        </div>
                                        <div className="measure measure2">
                                            <h1>Height</h1>
                                            <div className="box">

                                                <input value={val.height} className='inputcm' placeholder='1' type="text" />
                                                <h1>cm</h1>
                                            </div>
                                        </div>
                                        <div className="measure measure2">
                                            <h1>width</h1>
                                            <div className="box">

                                                <input value={val.width} className='inputcm' placeholder='1' type="text" />
                                                <h1>cm</h1>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="package packagex">
                                        <div className="measure measure2">
                                            <h1>Weight</h1>
                                            <div className="box">
                                                <input value={val.weight} className='inputcm' placeholder='1' type="text" />

                                            </div>
                                        </div>
                                        <div className="measure measure2">
                                            <h1>Package Value</h1>
                                            <div className="box">

                                                <input className='inputcm' placeholder='1' type="text" />
                                                <h1>RON</h1>
                                            </div>
                                        </div>
                                        <div className="measure measure2">
                                            <h1>Package Contents</h1>
                                            <div className="box">

                                                <input className='inputcm' placeholder='Contents' type="text" />
                                        
                                            </div>
                                        </div>



                                    </div>
                                </>
                            ))

                            }
                            
                            {/* 
                            <h1 style={{marginTop:'30px'}}>Expected pickup time</h1>
                            <p>To have your parcel picked up the next workday, payments needs to arrive
                                on our account until 14:00</p>
                            <span className='chse'>
                                <form className='parentform parfotm'>
                                    <p style={{ marginRight: '30px' }} >
                                        <input type="radio" id="test1" name="radio-group" checked />
                                        <label className='labelm' onClick={e => setept('12:30')} for="test1">Today 08:30</label>
                                    </p>
                                    <p style={{ marginRight: '30px' }}>
                                        <input type="radio" id="test2" name="radio-group" />
                                        <label className='labelm' onClick={e => setept('12:30')} for="test2">Today 08:30</label>
                                    </p>
                                    <p>
                                        <input type="radio" id="test3" name="radio-group" />
                                        <label className='labelm' onClick={e => setept('12:30')} for="test3">
                                            Today 08:30</label>
                                    </p>

                                    <p className='pall'>
                                        <input type="radio" id="test4" name="radio-group" />
                                        <label className='labelm' onClick={e => setept('12:30')} for="test4">
                                            Today 08:30</label>
                                    </p>

                                    <p className='pall'>
                                        <input type="radio" id="test5" name="radio-group" />
                                        <label className='labelm' onClick={e => setept('12:30')} for="test5">
                                            Today 08:30</label>
                                    </p>
                                </form>


                            </span>
*/}
                            <h1 style={{marginTop:'30px'}}>Order’s email address and phone number</h1>

                            <div className="addressbox">
                                <div className="addbox addboxnew">
                                    <h4 className='lastname'>First name</h4>
                                    <input type="text" placeholder='Enter first name' />
                                </div>
                                <div className="addbox addboxnew">
                                    <h4 className='lastname'>Last name</h4>
                                    <input type="text" placeholder='Enter last name' />
                                </div>


                                <div className="addbox addboxnew">
                                    <h4 className='lastname'>Email</h4>
                                    <input type="text" placeholder='Enter Email' />
                                </div>

                                <div className="addbox addboxnew">
                                    <h4 className='lastname'>Phone number</h4>
                                    <input type="text" placeholder='Enter phone number' />
                                </div>

                            </div>

                            <div className="packagesub packj polo pak3">

                                <h1 className='senert'>Sender (pickup address)<div className="copy" onClick={e => importadd('sender')}>
                                    <FiCopy color='#436BFD' fontSize={25} />

                                </div> </h1>
                                <form className='parentform'>
                                    <p onClick={e => setsenderaddtype('Individual')} style={{ marginRight: '30px' }} >
                                        <input type="radio" id="testx" checked={senderaddtype === 'Individual'} />
                                        <label for="testx">Individual</label>
                                    </p>
                                    <p onClick={e => setsenderaddtype('Company')}>
                                        <input type="radio" id="testx2" checked={senderaddtype === 'Company'} />
                                        <label for="testx2">Company</label>
                                    </p>
                                </form>
                                {senderaddtype === 'Individual' ?
                                    <>
                                        <h3>Sender name</h3>
                                        <input value={sendername} onChange={e => setsendername(e.target.value)} className='recep' type="text" placeholder='Enter sender name' />

                                    </>
                                    : <>
                                        <h3>Company name</h3>
                                        <input value={sendername} onChange={e => setsendername(e.target.value)} className='recep' type="text" placeholder='Enter company name' />

                                    </>

                                }
                                <div className="addressbox">
                                    {senderaddtype === 'Individual' &&
                                        <>
                                            <div className="addbox addboxnew">
                                                <h4>Last name</h4>
                                                <input type="text" placeholder='Enter last name' />
                                            </div>

                                            <div className="addbox addboxnew">
                                                <h4>First name</h4>
                                                <input type="text" placeholder='Enter first name' />
                                            </div>

                                        </>

                                    }
                                    <div className="addbox addboxnew">
                                        <h4>County name</h4>
                                        <select onChange={e => getcities2(e.target.value)} value={sendercountry} color='gray' className='selectnew' name="cars" id="cars">
                                            {allcountries.map((val) => (

                                                <option value={val}>{val}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="addbox addboxnew">
                                        <h4>City</h4>
                                        <select value={sendercity} color='gray' onChange={e => setsendercity(e.target.value)} className='selectnew' name="cars" id="cars">
                                          
                                        <option value={sendercity}>{sendercity}</option>
                                          
                                          
                                            {states2 && states2.map((val) => (

                                                <option value={val}>{val}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="addbox addboxnew">
                                        <h4>Postal code</h4>
                                        <input value={senderpostalcode} onChange={e => setsenderpostalcode(e.target.value)} type="text" placeholder='Enter postal code' />
                                    </div>


                                    <div className="addbox addboxnew">
                                        <h4>Street</h4>
                                        <input value={senderstreet} onChange={e => setsenderstreet(e.target.value)} type="text" placeholder='Enter street' />
                                    </div>

                                    <div className="addbox addboxnew">
                                        <h4>Number</h4>
                                        <input value={sendernumber} onChange={e => setsendernumber(e.target.value)} type="text" placeholder='Enter street number' />
                                    </div>


                                    {senderaddtype === 'Company' &&

                                        <div className="addbox addboxnew">
                                            <h4>Tax identification number</h4>
                                            <input value={recnumber} onChange={e => setrecnumber(e.target.value)} type="text" placeholder='Tax identification number' />
                                        </div>


                                    }

                                </div>
                                <h3 style={{ marginTop: '10px' }}>Comments</h3>
                                <textarea onChange={e => setsendercomments(e.target.value)} className='comment' name="" id="" cols="30" placeholder='Enter message' rows="10"></textarea>

                            </div>

                            <div className="packagesub packj polo pak3">

                                <h1 className='senert'>Recipient (delivery address)<div className="copy" onClick={e => importadd('rec')}>
                                    <FiCopy color='#436BFD' fontSize={25} />

                                </div></h1>
                                <form className='parentform'>
                                    <p onClick={e => setrecaddtype('Individual')} style={{ marginRight: '30px' }} >
                                        <input type="radio" id="testxa" checked={recaddtype === 'Individual'} />
                                        <label for="testxa">Individual</label>
                                    </p>
                                    <p onClick={e => setrecaddtype('Company')}>
                                        <input type="radio" id="testx2a" checked={recaddtype === 'Company'} />
                                        <label for="testx2a">Company</label>
                                    </p>
                                </form>
                                {recaddtype === 'Individual' ?
                                    <>
                                        <h3 >Recipient Name </h3>
                                        <input value={recname} onChange={e => setrecname(e.target.value)} className='recep' type="text" placeholder='Enter Recipient Name' />

                                    </> :
                                    <>
                                        <h3 >Company Name </h3>
                                        <input value={recname} onChange={e => setrecname(e.target.value)} className='recep' type="text" placeholder='Enter Company Name' />

                                    </>

                                }
                                <div className="addressbox">

                                    {recaddtype === 'Individual' &&
                                        <>
                                            <div className="addbox addboxnew">
                                                <h4 className='lastname'>Last name</h4>
                                                <input type="text" placeholder='Enter last name' />
                                            </div>

                                            <div className="addbox addboxnew">
                                                <h4 className='lastname'>First name</h4>
                                                <input type="text" placeholder='Enter first name' />
                                            </div>
                                            <div className="addbox addboxnew">
                                                <h4 className='lastname'>Email</h4>
                                                <input type="text" placeholder='Enter email' />
                                            </div>

                                            <div className="addbox addboxnew">
                                                <h4 className='lastname'>Phone</h4>
                                                <input type="text" placeholder='Enter phone no' />
                                            </div>

                                        </>

                                    }
                                    <div className="addbox addboxnew">
                                        <h4>County name</h4>
                                        <select value={reccountry} onChange={e => getcities(e.target.value)} color='gray' className='selectnew' name="cars" id="cars">
                                            {allcountries.map((val) => (

                                                <option value={val}>{val}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="addbox addboxnew">
                                        <h4>City</h4>
                                        <select value={reccity} onChange={e => setreccity(e.target.value)} color='gray' className='selectnew' name="cars" id="cars">
                                         
                                        <option value={reccity}>{reccity}</option>
                                            {states && states.map((val) => (

                                                <option value={val}>{val}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="addbox addboxnew">
                                        <h4 className='lastname'>Postal code</h4>
                                        <input value={recpostalcode} onChange={e => setrecpostalcode(e.target.value)} type="text" placeholder='Enter postal code' />
                                    </div>
                                    <div className="addbox addboxnew">
                                        <h4 className='lastname'>Street</h4>
                                        <input value={recstreet} onChange={e => setrecstreet(e.target.value)} type="text" placeholder='Enter street' />
                                    </div>

                                    <div className="addbox addboxnew">
                                        <h4>Number</h4>
                                        <input value={recnumber} onChange={e => setrecnumber(e.target.value)} type="text" placeholder='Enter  number' />
                                    </div>


                                    {recaddtype === 'Company' &&

                                        <div className="addbox addboxnew">
                                            <h4>Tax identification number</h4>
                                            <input value={recnumber} onChange={e => setrecnumber(e.target.value)} type="text" placeholder='Tax identification number' />
                                        </div>


                                    }

                                </div>
                                <h3 style={{ marginTop: '10px' }}>Comments</h3>
                                <textarea onChange={e => setreccomments(e.target.value)} className='comment' name="" id="" cols="30" placeholder='Enter message' rows="10"></textarea>

                            </div>
                            <button className='continue' onClick={e => gotonext()}>Continue</button>
                        </div>
                        {jsonorder &&
                            <div className="packeta">
                                <div className="subpack">
                                    <h1>Currently selected service <BsPrinter /></h1>
                                    <h3>{jsonorder.service.service}</h3>
                                    <h4>Next workday delivery</h4>
                                    <span><h1>1 x Box</h1> <h1>{jsonorder.weight} kg</h1></span>

                                    <span><h1>Shipping Fee</h1> <h1>{jsonorder.price} RON</h1></span>

                                    <div><h1>Net</h1> <h1>11.54 RON</h1></div>
                                    <div><p>Gross</p> <p>{jsonorder.price + 10} RON</p></div>
                                </div>

                            </div>

                        }

                    </div>

                </div>
            </div>

        </>
    )
}

export default Details