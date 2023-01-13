import React from 'react'
import { FiLogOut, FiSearch, FiEdit2, FiHome, FiFile } from 'react-icons/fi'
import { TbBrandBitbucket } from 'react-icons/tb'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import asd from '../../images/asdw.jpg'
import { RiSettings5Line } from 'react-icons/ri'
import { IoCloseSharp } from 'react-icons/io5'
import { useState } from 'react'
import { useEffect } from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import ReactPaginate from 'react-paginate';
import axios from 'axios'
import { BsCalendar } from 'react-icons/bs'
import * as t from '../apis'
const headers={
  apikey:t.apikey,
  apisecret:t.apisecret
}

const Package = () => {
    const [cur, setcur] = useState()
    
    useEffect(() => {
        var key=localStorage.getItem('Userkey')
      if(key.search('0-9-3988300Sdf0999i84')>=0){
        var k=key.split('_$')
        axios.post(`${t.backedlink}api/addpackage/find`, {
            headers:headers,
            user_id: k[1]
        }).then(res => {
            setcur(res.data.Package)
            console.log(res.data.Package)
        })
      }
      else{
        window.location.pathname='/'
        
      }
        return () => {
          
        }
      }, [])
 
    return (
        <>
            {cur &&
                <Package2 person={cur} />

            }
        </>
    )
}


const Package2 = (cur) => {
    const [name, setname] = useState('')
    const [length, setlength] = useState(0)
    const [height, setheight] = useState(0)
    const [width, setwidth] = useState(0)
    const [weight, setweight] = useState(0)
    const [value, setvalue] = useState('')
    const [contents, setcontents] = useState('')
    const [user_id, setuser_id] = useState('')
    const [quanity, setquanity] = useState(0)
    const [ptype, setptype] = useState('Box')
    const [currselect, setcurrselect] = useState('cursel')
    const [addpackage, setaddpackage] = useState("package2")
    const [requesttype, setrequesttype] = useState('add')

    const [searchval, setsearchval] = useState('')
    const [fname, setfname] = useState('')
const [email, setemail] = useState('')

    useEffect(() => {
        var key=localStorage.getItem('Userkey')
      if(key.search('0-9-3988300Sdf0999i84')>=0){
        var k=key.split('_$')


        axios.post(`${t.backedlink}api/signup/find`, {
            headers: headers,
            _id: k[1],
        }).then(res => {

          
            setfname(res.data.User.name)
            
            
            setemail(res.data.User.email)
        })
     setuser_id(k[1])
      }
        return () => {
          
        }
      }, [])

    var itemsPerPage = 4
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    
  function logout() {
    
  localStorage.removeItem('Userkey')
  window.location.pathname='/'
    
  }
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(cur.person.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(cur.person.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % cur.person.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    function setaddpackagen(val, item) {
setupdateid(item._id)
        setrequesttype('update')
        setaddpackage(val)
        setlength(item.length)
        setname(item.name)
        setweight(item.weight)
        setvalue(item.value)
        setheight(item.height)
        setcontents(item.contents)
        setwidth(item.width)
        setquanity(item.quantity)
        setptype(item.type)

    }

    function setaddpackagen2(val) {
        setrequesttype('add')
        setaddpackage(val)
        setlength('')
        setname('')
        setweight('')
        setvalue('')
        setheight('')
        setcontents('')
        setwidth('')
        setquanity('')
        setptype('Box')

    }
const [updateid, setupdateid] = useState('6387aa878983884b4133ba37')
    function addpackages() {

        if (requesttype === 'add') {

            axios.post(`${t.backedlink}api/addpackage/add`, {
                headers:headers,
                length: length,
                name: name,
                height: height,
                width: width,
                weight: weight,
                value: value,
                user_id: user_id,
                contents, contents,
                quantity: quanity,
                type: ptype
            })
                .then((res) => {
                    console.log(res)
                    window.location.reload()
                }).catch(err => {
                    console.log(err)
                })
        } else {
            axios.post(`${t.backedlink}api/addpackage/update`, {
                headers:headers,
                _id:updateid,


                length: length,
                name: name,
                height: height,
                width: width,
                weight: weight,
                value: value,
                user_id: user_id,
                contents, contents,
                quantity: quanity,
                type: ptype
            })
                .then((res) => {
                    console.log(res)
                    window.location.reload()
                }).catch(err => {
                    console.log(err)
                })
        }


    }  function deleteadd(val) {
        axios.post(`${t.backedlink}api/addpackage/delete`,{
          headers:headers,
          _id:val
        }).then(res=>{
          console.log(res)
          window.location.reload()
        })
        
      }
    return (
        <div className="dashboard">
            <div className={addpackage}>
                <div className="packagesub pak3">

                    <IoCloseSharp className='io' onClick={e => setaddpackage('package2')} />
                    <div className="icon">
                        <BsCalendar className='facoin' />

                    </div>

                    <h1>Add new Package</h1>
                    <form className='parentform'>
                        <p style={{ marginRight: '30px' }} >
                            <input type="radio" id="test1" checked={ptype === 'Box'} />
                            <label onClick={e => setptype('Box')} for="test1">Paper box</label>
                        </p>
                        <p onClick={e => setptype('Document')} style={{ marginRight: '30px' }}>
                            <input type="radio" id="test2" checked={ptype === 'Document'} />
                            <label for="test2">Document</label>
                        </p>
                        <p onClick={e => setptype('Pallet')}>
                            <input type="radio" id="test3" checked={ptype === 'Pallet'} />
                            <label for="test3">
                                Pallet</label>
                        </p>
                    </form>
                    <form className="addressbox">
                        <div className="addbox">
                            <h4>Package name</h4>
                            <input value={name} onChange={e => setname(e.target.value)} type="text" placeholder='Enter package name' />
                        </div>

                        <div className="addbox">
                            <h4>Quantity</h4>
                            <input value={quanity} onChange={e => setquanity(e.target.value)} type="number" placeholder='Enter quantity' />
                        </div>
                        <div className="addbox">
                            <h4>Length</h4>
                            <input value={length} onChange={e => setlength(e.target.value)} type="number" placeholder='Enter Length' />
                        </div>

                        <div className="addbox">
                            <h4>Height</h4>
                            <input value={height} onChange={e => setheight(e.target.value)} type="number" placeholder='Enter Height' />
                        </div>

                        <div className="addbox">
                            <h4>Width</h4>
                            <input value={width} onChange={e => setwidth(e.target.value)} type="number" placeholder='Enter width' />
                        </div>

                        <div className="addbox">
                            <h4>Weight</h4>
                            <input value={weight} onChange={e => setweight(e.target.value)} type="number" placeholder='Enter weight' />
                        </div>

                        <div className="addbox">
                            <h4>Package value</h4>
                            <input value={value} onChange={e => setvalue(e.target.value)} type="text" placeholder='Enter value' />
                        </div>

                        <div className="addbox">
                            <h4>Package contents</h4>
                            <input value={contents} onChange={e => setcontents(e.target.value)} type="text" placeholder='Enter contents' />
                        </div>
                    </form>
                    <div className="buttons">
                        <button className='cancel'>Cancel</button>
                        <button className='submit' onClick={e => addpackages()}>Add</button>
                    </div>
                </div>


            </div>
            <div className="subdash">
                <div className="subdash1">
                    <div className="dashmenu">
                        <h1 onClick={e => window.location.pathname = 'ordershistory'} > <FiFile fontSize={22} className='fifi' /> Orders History</h1>
                        <h1 onClick={e => window.location.pathname = 'dashboard'}    ><FiHome fontSize={22} className='fifi' /> Saved Addresses</h1>
                        <h1 onClick={e => window.location.pathname = 'packages'} className={currselect}> <TbBrandBitbucket fontSize={22} className='fifi' /> Saved Packages</h1>
                        <h1 onClick={e => window.location.pathname = 'settings'} > <RiSettings5Line fontSize={22} className='fifi' /> Profile Settings</h1>

                        <div className="email">
                        <div className="or">
                            OR
                        </div>
                        <div className="emaildetails">
                        <h1>{fname&&fname}</h1>
                                    <h3>{email}</h3>

                        </div>
                        <FiLogOut onClick={e=>logout()} fontSize={15} />
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
                        <h1>Saved Packages</h1>
                        <h2>You can create templates for parcels that you ship on a regular basis. Enter the weight,
                            dimensions, package type and content to save you time when placing orders.</h2>
                        <span>
                            <div className="searches">
                                <div className="search">
                                    <FiSearch className='fis' />
                                    <input onChange={e => setsearchval(e.target.value)} placeholder='Search' type="text" />

                                </div>
                            </div>
                            <button style={{ width: '202px' }} onClick={e => setaddpackagen2('packagen')}>
                                + Add new package

                            </button>


                        </span>

                        <div className="tablex">
                            <>
                                <div className="tablerow" >
                                    <input type="checkbox" className='no2' />
                                    <h1 className='no no2' >No</h1>
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
                                {currentItems &&
                                    currentItems.map((item, index) => (
                                        index % 2 != 0 ?

                                            <>
                                                {searchval.length > 0 ? item.name.search(searchval) >= 0 &&
                                                    <div className="tablerow">
                                                        <input type="checkbox" />
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



                                                        <h3 color='#344054' style={{ marginRight: '30px', cursor: 'pointer' }} onClick={e => setaddpackagen('packagen', item)} ><FiEdit2 color='#344054' /></h3>

                                                        <h3 color='#344054' onClick={e=>deleteadd(item._id)}  ><RiDeleteBinLine color='#344054' /></h3>
                                                    </div> :
                                                    <> <div className="tablerow">
                                                        <input type="checkbox" />
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



                                                        <h3 color='#344054' style={{ marginRight: '30px', cursor: 'pointer' }} onClick={e => setaddpackagen('packagen', item)} ><FiEdit2 color='#344054' /></h3>

                                                        <h3 color='#344054' onClick={e=>deleteadd(item._id)}  ><RiDeleteBinLine color='#344054' /></h3>
                                                    </div>
                                                    </>
                                                }
                                            </>

                                            :
                                            <>
                                                {searchval.length > 0 ? item.name.search(searchval) >= 0 &&
                                                    <div className="tablerow" style={{ backgroundColor: "#F9FAFB" }}>
                                                        <input type="checkbox" />
                                                        <h1 className='no' >{item.no}</h1>
                                                        <h1 className='namew'>{item.name}</h1>
                                                        <h1 className='addw'>{item.type}</h1>


                                                        <h1 className='no' >{item.quantity}</h1>
                                                        <h1 className='no' >{item.length}</h1>
                                                        <h1 className='no' >{item.weight}</h1>
                                                        <h1 className='no' >{item.width}</h1>
                                                        <h1 className='no' >{item.height}</h1>
                                                        <h1 className='no' >{item.contents}</h1>
                                                        <h1 className='no nob' >{item.value}</h1>


                                                        <h3 color='#344054' style={{ marginRight: '30px', cursor: 'pointer' }} onClick={e => setaddpackagen('packagen', item)}><FiEdit2 color='#344054' /></h3>

                                                        <h3 color='#344054'onClick={e=>deleteadd(item._id)}  ><RiDeleteBinLine color='#344054' /></h3>
                                                    </div> :
                                                    <><div className="tablerow" style={{ backgroundColor: "#F9FAFB" }}>
                                                        <input type="checkbox" />
                                                        <h1 className='no' >{item.no}</h1>
                                                        <h1 className='namew'>{item.name}</h1>
                                                        <h1 className='addw'>{item.type}</h1>


                                                        <h1 className='no' >{item.quantity}</h1>
                                                        <h1 className='no' >{item.length}</h1>
                                                        <h1 className='no' >{item.weight}</h1>
                                                        <h1 className='no' >{item.width}</h1>
                                                        <h1 className='no' >{item.height}</h1>
                                                        <h1 className='no' >{item.contents}</h1>
                                                        <h1 className='no nob' >{item.value}</h1>


                                                        <h3 color='#344054' style={{ marginRight: '30px', cursor: 'pointer' }} onClick={e => setaddpackagen('packagen', item)}><FiEdit2 color='#344054' /></h3>

                                                        <h3 color='#344054'onClick={e=>deleteadd(item._id)}  ><RiDeleteBinLine color='#344054' /></h3>
                                                    </div>

                                                    </>


                                                }</>
                                    ))}
                            </>
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel={<AiOutlineArrowRight className='ert' />}
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={pageCount}
                                previousLabel={<AiOutlineArrowLeft className='ert2' />}
                                renderOnZeroPageCount={null}
                            />
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Package