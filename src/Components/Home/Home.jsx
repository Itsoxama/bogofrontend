



import React from 'react'
import "./Home.css"
import { VscArrowSwap } from 'react-icons/vsc'
import axios from 'axios'

import { IoCloseSharp } from 'react-icons/io5'
import group from "../../images/Group.png"
import { FiCopy } from 'react-icons/fi'
import jp from "../../images/japan.png"
import { BsCalendar, BsChevronDown } from 'react-icons/bs'
import fr from "../../images/france.png"
import { BsArrowRight } from 'react-icons/bs'
import ger from "../../images/german.jpg"
import { FaCoins, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import img from "../../images/Image.png"
import { IoAirplaneSharp } from 'react-icons/io5'
import grouplogo from "../../images/Group216.png"
import rom from "../../images/asd.jpg"
import { useState } from 'react'
import countries from './data'
import Select from 'react-select'
import Alba from './data'
import { ct } from './data'
import { RiDeleteBinLine } from 'react-icons/ri'
import * as tx from '../apis'
import { useEffect } from 'react'

const Home = () => {

  var a = new FormData()
  var b = new FormData()
  const [allcitiessend, setallcitiessend] = useState([])
  const [allcitiesdest, setallcitiesdest] = useState([])
  const [jsoninfo, setjsoninfo] = useState()
  async function setoptionss(val1, val2, val3) {
    setoptions(val1)
    setimgs(val3)
    setname(val2)
    setallcitiessend2([])
    var a3 = new FormData()
    a3.append('username', 'clienttest@fancourier.ro')
    a3.append('client_id', '323245')
    a3.append('user_pass', 'testareFAN')
    a3.append('judet', val2)
    var l

   await axios.post('https://www.selfawb.ro/all/export_distante_integrat.php', a3).then(res => {
      var ax = res.data.split("\n")
      ax.forEach(element => {
        l = element.split(',')
        if (l[1] && l[1].length >= 1) {
          var t = l[1].replaceAll('"', '')

          console.log(t)
          setallcitiessend(prevState => [...prevState, t]);
          if (t !== 'Localitate') {
            setallcitiessend2(ert => [...ert, {
              label: t,
              value: t
            }])

          }

        }


      });
    })


  }
  const [allcitiessend2, setallcitiessend2] = useState([])

  const [allcitiesdest2, setallcitiesdest2] = useState([])
  async function setoptionss2(val1, val2, val3) {
    setoptions2(val1)
    setimgs2(val3)
    setname2(val2)
    setallcitiesdest([])
    setallcitiesdest2([])
    var a3 = new FormData()
    a3.append('username', 'clienttest@fancourier.ro')
    a3.append('client_id', '323245')
    a3.append('user_pass', 'testareFAN')
    a3.append('judet', val2)
    var l
    await axios.post('https://www.selfawb.ro/all/export_distante_integrat.php', a3).then(res => {
      var ax = res.data.split("\n")
      ax.forEach(element => {
        l = element.split(',')
        if (l[1] && l[1].length >= 1) {
          var t = l[1].replaceAll('"', '')
          setallcitiesdest(prevState => [...prevState, t]);
          if (t !== 'Localitate') {
            setallcitiesdest2(ert => [...ert, {
              label: t,
              value: t
            }])

          }

        }


      });
    })

  }
  function setoptionss3(val1, val2, val3) {
    setoptions3(val1)
    setimgs3(val3)
    setname3(val2)

  }
  function setoptionss4(val1, val2, val3) {
    setoptions4(val1)
    setimgs4(val3)
    setname4(val2)

  }
  const [imgs, setimgs] = useState(ger)
  const [options, setoptions] = useState('options2')
  const [name, setname] = useState("")


  const [imgs2, setimgs2] = useState(ger)
  const [options2, setoptions2] = useState('options2')
  const [name2, setname2] = useState("")


  const [imgs4, setimgs4] = useState(ger)
  const [options4, setoptions4] = useState('options2')
  const [name4, setname4] = useState("")


  const [imgs3, setimgs3] = useState(ger)
  const [options3, setoptions3] = useState('options2')
  const [name3, setname3] = useState("")
  function getrequest2() {

    a.append('username', 'clienttest@fancourier.ro')
    a.append('client_id', '323245')
    a.append('user_pass', 'testareFAN')
    a.append('serviciu', 'Produse Albe')
    a.append('localitate_dest', "Agafton")
    a.append('localitate_exp', 'Albesti-Muru')
    a.append('judet_exp', 'Prahova')
    a.append('judet_dest', 'Botosani')
    a.append('plicuri', "1")
    a.append('colete', "1")
    a.append('greutate', "1")
    a.append('lungime', "10")
    a.append('latime', "10")
    a.append('inaltime', "10")

    b.append('username', 'clienttest@fancourier.ro')
    b.append('client_id', '323245')
    b.append('user_pass', 'testareFAN')
    b.append('expeditor', 'expeditor')
    b.append('pers_contact', "Usman")
    b.append('tel', '+9764646116')
    b.append('email', 'itsoxamsa@gmail.com')
    b.append('nr_colete', '5')
    b.append('nr_plicuri', "1")
    b.append('greutate', "1")
    b.append('inaltime', "10")
    b.append('lungime', "10")
    b.append('latime', "10")
    b.append('ora_ridicare', '12:25')
    b.append('data_cmd', "2023-1-27")
    b.append('observatii', "sad")
    b.append('strada', "5")
    b.append('nr', "10")
    b.append('scara', "yes")
    b.append('etaj', "2")
    b.append('ap', "1")
    b.append('localitate', "Albesti-Muru")
    b.append('judet', "Prahova")
    b.append('nume_dest', "usama")
    b.append('mod', "1")


    var c = new FormData()

    c.append('username', 'clienttest@fancourier.ro')
    c.append('client_id', '323245')
    c.append('user_pass', 'testareFAN')
    c.append('mod', 1)
    c.append('expeditor', 'expedsitor')
    c.append('pers_contact', "Ussaman")
    c.append('tel', '+976464611a6')
    c.append('email', 'itsoxamasa@gmail.com')
    c.append('nr_colete', '52')
    c.append('nr_plicuri', "12")
    c.append('greutate', "12")
    c.append('inaltime', "120")
    c.append('lungime', "120")
    c.append('latime', "102")
    c.append('ora_ridicare', '12:45')
    c.append('data', "5.12.2022")
    c.append('observatii', "sad")
    c.append('strada', "5")
    c.append('nr', "10")
    c.append('scara', "yes")
    c.append('etaj', "2")
    c.append('ap', "1")
    c.append('localitate', "Albesti-Muru")
    c.append('judet', "Prahova")
    c.append('nume_dest', "usa2ma")

    c.append('language', "en")
    console.log(a)


    var x = new FormData()

    x.append('username', 'clienttest@fancourier.ro')
    x.append('client_id', '323245')
    x.append('user_pass', 'testareFAN')
    x.append('AWB', '17859798')
    x.append('language', 'en')
    x.append('display_mode', '4')
    /*
    axios.post('https://www.selfawb.ro/export_comenzi_integrat.php',c).then(res=>{
      console.log(res.data)
    })*/

    axios.post('https://www.selfawb.ro/all/awb_tracking_integrat.php', x).then(res => {


      console.log(res.data)

    })


  }


  var allcountries = ["Arad", "Arges", "Bacau", "Bihor", "Bistrita-Nasaud", "Botosani", "Braila", "Brasov", "Bucuresti", "Buzau", "Calarasi", "Caras-Severin", "Cluj", "Constanta", "Covasna", "Dambovita", "Dolj", "Galati", "Giurgiu", "Gorj", "Harghita", "Hunedoara", "Ialomita", "Iasi", "Ilfov", "Maramures", "Mehedinti", "Mures", "Neamt", "Olt", "Prahova", "Salaj", "Satu Mare", "Sibiu", "Suceava", "Teleorman", "Timis", "Tulcea", "Valcea", "Vaslui", "Vrancea"]
  const [allcount, setallcount] = useState([])
  useEffect(() => {

    allcountries.forEach(element => {

      setallcount(cnt => ([...cnt, {
        label: element,
        value: element
      }]))

    });

    return () => {

    }
  }, [])
  const [measure, setmeasure] = useState([
    {
      pieces: 1,
      length: 1,
      height: 1,
      width: 1,
      weight: 1
    }
  ]);
  function addpackage() {

    setmeasure(prevState => [...prevState, {
      pieces: 1,
      length: 1,
      height: 1,
      width: 1,
      weight: 1
    }]);
    console.log(measure)

  }

  function changepieces(val, index) {

    var temparr = measure;
    temparr[index].pieces = val;
    setmeasure(temparr)
    console.log(measure)


  }

  function changeheight(val, index) {
    val = parseInt(val)
    var temparr = measure;
    temparr[index].height = val;

  }

  function changewidth(val, index) {
    val = parseInt(val)
    var temparr = measure;
    temparr[index].width = val;

  }

  function changeweight(val, index) {
    val = parseInt(val)
    var temparr = measure;
    temparr[index].weight = val;

  }
  function changelength(val, index) {
    val = parseInt(val)
    var temparr = measure;
    temparr[index].length = val;

  }

  function getestimate() {
    var length2 = 0;
    var pieces2 = 0
    var width2 = 0
    var height2 = 0
    var weight2 = 0

    var jsonin = {
      measure: measure,
      destcountry: name2,
      destcity: name4,
      sendercountry: name,
      sendercity: name3

    }
    console.log(JSON.stringify(jsonin))
    localStorage.setItem('temppackage', JSON.stringify(jsonin))
    measure.forEach((val, index) => {
      length2 =parseInt(val.length)  + length2
      pieces2 = parseInt(val.pieces)  + pieces2
      width2 = parseInt(val.width) + width2
      height2 = parseInt(val.height ) + height2
      weight2 = parseInt(val.weight)  + weight2
      if (index === measure.length - 1) {
        window.location.pathname = `calculate/length?${length2}&&pieces?${pieces2}&&width?${width2}&&height?${height2}&&wight?${weight2}&&destcountry?${name2}&&destcity?${name4}&&sendcountry?${name}&&sendcity?${name3}&&urgent?${urgentd}&&bulky?${bulky}&&packagetype?${packagetype}`

      }

    })

  }
  function handluc(e) {
    console.log(e)
    setoptionss('options2', e.label, fr)
  }


  function handluc2(e) {
    console.log(e)
    setoptionss3('options2', e.label, ger)
  }

  function handluc3(e) {
    console.log(e)
    setoptionss2('options2', e.label, fr)
  }


  function handluc4(e) {
    setoptionss4('options2', e.label, fr)
  }



  function deletepackage(val2) {

    console.log(measure)
    var a = []
    measure.forEach((val, index) => {
      if (index === val2) {
        console.log(val)

      }
      else {
        a.push(val)
      }

    })
    setmeasure([])
    setmeasure(a)
    console.log(a)

    console.log(measure)
  }




  function importadd() {


  }
  const [authenticated, setauthenticated] = useState(false)
  const [packages, setpackages] = useState()

  useEffect(() => {
    var headers = {
      apikey: tx.apikey,
      apisecret: tx.apisecret
    }
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

    }
    else {
      setauthenticated(false)

    }
    return () => {

    }
  }, [])
  function importthis2(val) {
  
      setmeasure(Object.values({...measure, [indexs]: {   
        
          weight: parseInt(val.weight),
          pieces: parseInt(val.quantity),
          width: parseInt(val.width),
          height: parseInt(val.height),
          length: parseInt(val.length)

        
      
      
      }}))
      console.log(measure)
      setimportress2('addimport2')
      

  }
  function importpak(ind) {
    setindexs(ind)
    setimportress2('addimport')
    
  }
  
const [indexs, setindexs] = useState(0)
  const [packagetype, setpackagetype] = useState('parcel2')
  const [importress2, setimportress2] = useState('addimport2')
  useEffect(() => {
    seti(0)

    return () => {

    }
  }, [i])
  const [i, seti] = useState(0)
  const [urgentd, seturgentd] = useState('false')
  const [bulky, setbulky] = useState('false')
  return (
    <>
      <div className="home">
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
        <div className="subhome">


          <div>
            <h1>The price machine <br />for <strong>courier services</strong></h1>
            <h2>Compare prices and get amazing discounts from the<br />
              world's largest carriers.</h2>
          </div>
          <img src={group} alt="" />

        </div>
      </div>
      <div className="psending">
        <div className="subsending">
          <div className="heading">
            <div className="text">

              <h1>Package Sending</h1>
              <h2>Compare prices from the world's largest carriers.</h2>
            </div>
            <div className="choose">
              <div className="radio" style={{ cursor: 'pointer' }} onClick={e => setpackagetype('parcel2')}>

                <input checked={packagetype === 'parcel2'} type="radio" name='asd' className='inputpos' />
                <h1>Paper box</h1>
              </div>
              <div className="radio" style={{ cursor: 'pointer' }} onClick={e => setpackagetype('letter')}>

                <input checked={packagetype === 'letter'} type="radio" name='asd' className='inputpos' />
                <h1>Document</h1>
              </div>
              <div className="radio" style={{ cursor: 'pointer' }} onClick={e => setpackagetype('parcel')}>

                <input checked={packagetype === 'parcel'} type="radio" name='asd' className='inputpos' />
                <h1>Pallet</h1>
              </div>

            </div>

          </div>
          <div className="country">
            <div className="parentselect">

              <h1>Sender county</h1>

              <Select options={allcount} onChange={handluc} />

              <h1>Sender city</h1>

              <Select options={allcitiessend2} onChange={handluc2} />

            </div>

            <div className="circle">
              <VscArrowSwap className='ciricon' />
            </div>
            <div className="parentselect">
              <h1>Destination county</h1>

              <Select options={allcount} onChange={handluc3} />


              <h1>Destination city</h1>


              <Select options={allcitiesdest2} onChange={handluc4} />



            </div>

            {name && name2 && name3 && name4 ?

              <button className='btnstrt' onClick={e => getestimate()} >Ask for Offers</button>
              :

              <button className='btnstrt btnstrtx'  >Ask for Offers</button>


            }

          </div>
{
  packagetype!=='letter'?
  <>

{measure.length > 0 ?
            measure.map((val, index) => (
              <>
                <h2>{index + 1}. Package</h2>
                <div className="package">
                  <div className="measure">
                    <h1>Piece</h1>
                    <div className="box">
                    <input value={val.pieces} onChange={e => 
                      setmeasure(Object.values({...measure, [index]: {...measure[index], pieces: e.target.value }}))
                      } placeholder='1' type="number" />
                    </div>
                  </div>
                  <div className="measure">
                    <h1>Length</h1>
                    <div className="box">
                    <input value={val.length} onChange={e => 
                      setmeasure(Object.values({...measure, [index]: {...measure[index], length: e.target.value }}))
                      } placeholder='1' type="number" />
 <h1>cm</h1>
                    </div>
                  </div>
                  <div className="measure">
                    <h1>Height</h1>
                    <div className="box">

                      <input value={val.height} onChange={e => 
                      setmeasure(Object.values({...measure, [index]: {...measure[index], height: e.target.value }}))
                      } placeholder='1' type="number" />
                      <h1>cm</h1>
                    </div>
                  </div>
                  <div className="measure">
                    <h1>width</h1>
                    <div className="box">

                    <input value={val.width} onChange={e => 
                      setmeasure(Object.values({...measure, [index]: {...measure[index], width: e.target.value }}))
                      } placeholder='1' type="number" />
                      <h1>cm</h1>
                    </div>
                  </div>
                  <div className="measure">
                    <h1>Weight</h1>
                    <div className="box">

                    <input value={val.weight} onChange={e => 
                      setmeasure(Object.values({...measure, [index]: {...measure[index], weight: e.target.value }}))
                      } placeholder='1' type="number" />
                      <h1>Kg</h1>
                    </div>
                  </div>

                  <div className="copy" onClick={e=>importpak(index)}>
                    <FiCopy color='#436BFD' fontSize={25} />

                  </div>



                  {index >= 1 && <div className="copy copy3" onClick={e => deletepackage(index)}>
                    <RiDeleteBinLine color='#436BFD' fontSize={25} />

                  </div>

                  }
                </div>
              </>
            ))
            :
            <>
              <h2>1.Package</h2>

            </>

          }


          <h3 onClick={e => addpackage()}>+ More packages</h3>
          <div className="threechoice">
            <input type="checkbox" checked={urgentd==='true'} onClick={e=>urgentd==='false'?seturgentd('true'):seturgentd('false')} />
            <p>Urgent Delivery</p>
            <input type="checkbox"  checked={bulky==='true'} onClick={e=>bulky==='false'?setbulky('true'):setbulky('false')} />
            <p>Bulky</p>

          </div>
  </>:
  <>
  
{measure.length > 0 ?
            measure.map((val, index) => (
              <>
                <h2>{index + 1}. Package</h2>
                <div className="package">
                  <div className="measure">
                    <h1>Piece</h1>
                    <div className="box">
                    <input value={val.pieces} onChange={e => 
                      setmeasure(Object.values({...measure, [index]: {...measure[index], pieces: e.target.value }}))
                      } placeholder='1' type="number" />
                    </div>
                  </div>
                </div>
              </>
            ))
            :
            <>
              <h2>1.Package</h2>

            </>

          }
          <h3 onClick={e => addpackage()}>+ More packages</h3>
  </>
 
}
          <button className='btnend' onClick={e => getestimate()} >Ask for Offers</button>

        </div>
      </div>
      <div className="db">
        <div className="subdb">
          <div className="subdb1">
            <h1>
              Tips and tools
            </h1>
            <h2>
              What can help you keep up
              and get ahead
            </h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h3>
          </div>
          <div className="subdb2">
            <div className="subdbtext">
              <div className="subdbtext1">
                <div className="icon">
                  <FaCoins className='facoin' />
                </div>
                <div className="content">

                  <h1>Save on shipping</h1>
                  <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   </h2>
                  <h3>Start saving
                    <BsArrowRight fontSize={18} style={{ marginLeft: "10px" }} /></h3>
                </div>
              </div>

              <div className="subdbtext1">
                <div className="icon">
                  <BsCalendar className='facoin' />
                </div>
                <div className="content">

                  <h1>Take control of your deliveries</h1>
                  <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   </h2>
                  <h3>Sign up for free
                    <BsArrowRight fontSize={18} style={{ marginLeft: "10px" }} /></h3>
                </div>
              </div>

              <div className="subdbtext1">
                <div className="icon">
                  <IoAirplaneSharp className='facoin' />
                </div>
                <div className="content">

                  <h1>Pause deliveries while you travel</h1>
                  <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   </h2>
                  <h3>Find out how
                    <BsArrowRight fontSize={18} style={{ marginLeft: "10px" }} /></h3>
                </div>
              </div>

            </div>
            <div className="image">
              <img src={img} alt="" />

            </div>
          </div>
        </div>
        <div className="subhead">
          <h1>Headline</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h2>
          <button>Get shipping support</button>
        </div>

      </div>


    </>
  )
}

export default Home