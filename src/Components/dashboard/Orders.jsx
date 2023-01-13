

import React from 'react'
import { FiLogOut, FiSearch, FiEdit2, FiHome, FiFile } from 'react-icons/fi'
import { TbBrandBitbucket } from 'react-icons/tb'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import asd from '../../images/asdw.jpg'
import { RiSettings5Line } from 'react-icons/ri'
import { BsHourglass } from 'react-icons/bs'
import { IoCloseSharp } from 'react-icons/io5'
import { useState } from 'react'
import { useEffect } from 'react'
import { GrLinkPrevious } from 'react-icons/gr'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RiDeleteBinLine } from 'react-icons/ri'
import ReactPaginate from 'react-paginate';
import { AiOutlineCheck } from 'react-icons/ai'
import { TbTruckDelivery } from 'react-icons/tb'
import { BsCalendar, BsChevronDown } from 'react-icons/bs'
import axios from 'axios'
import { CSVLink } from "react-csv";

// Example items, to simulate fetching from another resources.
import * as t from '../apis'
const headers2 = [
  { label: "Order Number", key: "firstname" },
  { label: "Sender Number ", key: "sendernumber" },
  { label: "Sender Name", key: "sendername" },
  { label: "Sender Country", key: "sendercountry" },
  { label: "Sender City", key: "sendercity" },
  { label: "Sender Postal code", key: "senderpostalcode" },
  { label: "Sender Street", key: "senderstreet" },
  { label: "Reciever Number ", key: "recnumber" },
  { label: "Reciever Name", key: "recname" },
  { label: "Reciever Country", key: "reccountry" },
  { label: "Reciever City", key: "reccity" },
  { label: "Reciever Postal code", key: "recpostalcode" },
  { label: "Reciever Street", key: "recstreet" },
  { label: "Length ", key: "measure[0].length" },
  { label: "Quantity", key: "measure[0].pieces" },
  { label: "Width", key: "measure[0].width" },
  { label: "Height", key: "measure[0].height" },
  { label: "Weight", key: "measure[0].weight" },
  { label: "Status", key: "status" },






];
const headers={
  apikey:t.apikey,
  apisecret:t.apisecret
}


const Orders = () => {
    const [cur, setcur] = useState()
  useEffect(() => {
    var key=localStorage.getItem('Userkey')
  console.log(key)
  if(key&&key.search('0-9-3988300Sdf0999i84')>=0){
    var k=key.split('_$')
    
    axios.post(`${t.backedlink}api/order/find`, {
      headers:headers,  
      user_id: k[1]
    }).then(res => {

      console.log(res.data)
      setcur(res.data.Order)
    
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
          <Orders2 person={cur} />
  
        }
      </>
    )
  }
const Orders2 = ( cur ) => {
  
  const [fname, setfname] = useState('')
  const [email2, setemail2] = useState('')
   const [user_id, setuser_id] = useState('') 
    useEffect(() => {
        var key=localStorage.getItem('Userkey')
      if(key.search('0-9-3988300Sdf0999i84')>=0){
        var k=key.split('_$')
        
    axios.post(`${t.backedlink}api/signup/find`, {
      headers: headers,
      _id: k[1],
  }).then(res => {
  
    
      setfname(res.data.User.name)
      
      
      setemail2(res.data.User.email)
  })
     setuser_id(k[1])
      }
        return () => {
          
        }
      }, [])
    console.log(cur)
  function logout() {
    
    localStorage.removeItem('Userkey')
    window.location.pathname='/'
      
    }
    useEffect(() => {
        var key=localStorage.getItem('Userkey')
      console.log(key)
      if(key&&key.search('0-9-3988300Sdf0999i84')>=0){
        console.log(key.split('_$'))
        
      }
      else{
        window.location.pathname='/'
        
      }
        return () => {
          
        }
      }, [])
    var itemsPerPage = 4
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(cur.person.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(cur.person.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % cur.person.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);

    };

    const [currselect, setcurrselect] = useState('cursel')
    const [currselect2, setcurrselect2] = useState('cursel2')
    const [currselect3, setcurrselect3] = useState('cursel2')
    const [currselect4, setcurrselect4] = useState('cursel2')
    const [addpackage, setaddpackage] = useState("package2")
    return (
        <div className="dashboard">
            <div className={addpackage}>
                <div className="packagesub">
      
                    <IoCloseSharp className='io' onClick={e => setaddpackage('package2')} />
                    <div className="icon">
                        <BsCalendar className='facoin' />

                    </div>

                    <h1>


                    Export Orders

                    </h1>


                    <h3>Сhoose date range to export</h3>
                    <input type="text" placeholder='Start date - End date' />
                    <div className="buttons">
                        <button className='cancel'>Cancel</button>
                        <button className='submit ssss'>

                        <CSVLink 
  filename={"orders.csv"} data={cur.person} headers={headers2}>
                    Export Orders
</CSVLink>

                        </button>
                    </div>
                </div>


            </div>
            <div className="subdash">
                <div className="subdash1">
                    <div className="dashmenu">
                        <h1 onClick={e => window.location.pathname = 'ordershistory'} className={currselect}> <FiFile fontSize={22} className='fifi' /> Orders History</h1>
                        <h1 onClick={e => window.location.pathname = 'dashboard'}    ><FiHome fontSize={22} className='fifi' /> Saved Addresses</h1>
                        <h1 onClick={e => window.location.pathname = 'packages'} > <TbBrandBitbucket fontSize={22} className='fifi' /> Saved Packages</h1>
                        <h1 onClick={e => window.location.pathname = 'settings'} > <RiSettings5Line fontSize={22} className='fifi' /> Profile Settings</h1>
                        <div className="email">
                        <div className="or">
                            OR
                        </div>
                        <div className="emaildetails">
                        <h1>{fname&&fname}</h1>
                                    <h3>{email2}</h3>

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
                        <h1>Orders History</h1>
                        <span>
                            <div className="searches">
                                <div className="search">
                                    <FiSearch className='fis' />
                                    <input placeholder='Search' type="text" />

                                </div>
                            </div>
                            <button className='btnk' style={{ width: '141px' }} onClick={e => setaddpackage('packagen')}>
                          
                    Export Orders


                            </button>


                        </span>

                        <div className="tablex">
              <>
              <>
            <div className="tablerow" >
                <input type="checkbox" className='no2' />
                <h1 className='no no2' >No</h1>
                <h1 className='namew no2'>Order date</h1>
                <h1 className='namew no2'>Invoice number</h1>
                <h1 className='namew no2'>Waybill</h1>
                <h1 className='namew no2'>Destination</h1>
                <h1 className='namew no2'>Tracking no</h1>
                <h1 className='addw no2'>Tracking</h1>


            </div>
            {currentItems &&
                currentItems.map((item, index) => (
                    index % 2 != 0 ?
                        <div className="tablerow">
                            <input type="checkbox" />
                            <h1 className='no' >{index+1}</h1>
                            <h1 className='namew'>5/1/2023</h1>
                            <h1 className='namew'>{456+1}</h1>
                            <h1 className='namew'>PKIUEJKL</h1>
                            <h1 className='namew'>{item.reccity} {item.reccountry}</h1>
                            <h1 className='namew'>{item.awb}</h1>
                            {item.status === 'Delivered' ?

                                <h1 style={{ color: '#12B76A', fontWeight: '500', backgroundColor: '#F6FEF9' }} className='addw wer'> <div className="gricon">
                                    <AiOutlineCheck className='aiout' />
                                </div> {item.status}</h1> :
                                item.status === 'pending' ?

                                    <h1 style={{ color: '#DC6803', fontWeight: '500', backgroundColor: '#FFFBEB' }} className='addw wer'>
                                        <div className="gricon">
                                            <BsHourglass className='aiout' /></div>
                                        {item.status}</h1>
                                    :
                                    <h1 style={{ color: '#344054', fontWeight: '500', backgroundColor: '#F9FAFB' }} className='addw wer'>  <div className="gricon">
                                        <TbTruckDelivery className='aiout' /></div>
                                        {item.status}</h1>




                            }



                        </div> :
                        <div className="tablerow" style={{ backgroundColor: "#F9FAFB" }}>
                            <input type="checkbox" />
                            <h1 className='no' >{index+1}</h1>
                            <h1 className='namew'>5/1/2023</h1>
                            <h1 className='namew'>{456+1}</h1>
                            <h1 className='namew'>PKIUEJKL</h1>
                            <h1 className='namew'>{item.reccity} {item.reccountry}</h1>
                            <h1 className='namew'>{item.awb}</h1>
                            {item.status === 'Delivered' ?

                                <h1 style={{ color: '#12B76A', fontWeight: '500', backgroundColor: '#F6FEF9' }} className='addw wer'>
                                    <div className="gricon">
                                        <AiOutlineCheck className='aiout' /></div>
                                    {item.status}</h1> :
                                item.status === 'pending' ?

                                    <h1 style={{ color: '#DC6803', fontWeight: '500', backgroundColor: '#FFFBEB' }} className='addw wer'>
                                        <div className="gricon">
                                            <BsHourglass className='aiout' /></div>
                                        {item.status}</h1>
                                    :
                                    <h1 style={{ color: '#344054', fontWeight: '500', backgroundColor: '#F9FAFB' }} className='addw wer'> <div className="gricon">
                                        <TbTruckDelivery className='aiout' /></div>
                                        {item.status}</h1>




                            }



                        </div>
                ))}
        </>
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

export default Orders