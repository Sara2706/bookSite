import './orderItem.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';


function OrderItem({ value,setAnyDelete }) {
  const [single, setSingle] = useState([]);
  useEffect(() => {
    const getMyCart = async () => {

      try {
        const res = await axios.get(process.env.REACT_APP_BASEURL + 'product/' + value.productId, {
          headers: { token: 'Bearer ' + JSON.parse(localStorage.getItem('bookUser')) }
        })
        setSingle(res.data)

      } catch (err) {
        console.log(err)
      }
    }
    getMyCart();
    
  }, [value.qty])
 
  const deleteOrder = async (e) => {
    e.preventDefault();
    await axios.delete(process.env.REACT_APP_BASEURL + 'myorders/' + value._id, {
      headers: { token: 'Bearer ' + JSON.parse(localStorage.getItem('bookUser')) }
    })
    setAnyDelete(value._id)
  }
  return (
    < div className="orderItem" >

      <div className='link' >
        <div className="left">
          <img src={single.img} alt="Banner img" />
        </div>
        <div className="right">
          <h3>{single.productName}</h3>
          <h4>Catogry: {single.catogry}</h4>
          <h4>Qty: {value.qty}</h4>
          <h6>Price: {single.price * value.qty}</h6>
        </div>
      </div >
      <h4>Customer Name: <span>{value.costumerName}</span>,</h4>
      <h4>Customer Address: <span>{value.costumerAddress}</span>,</h4>
      <h4>Customer Phone No: <span>{value.costumerPhoneNo}</span>.</h4>
      <button onClick={deleteOrder}>Delete Order</button>
    </div >

  )
}

export default OrderItem