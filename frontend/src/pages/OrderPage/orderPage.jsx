import './orderPage.scss'
import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer'
import OrderList from '../../component/OrdersList/ordersList'
import { useEffect, useState } from 'react';
import axios from 'axios'


function OrderPage() {
  const [myOrder, setMyOrder] = useState([]);
  useEffect(() => {
    const getMyOrder = async () => {

      try {
        const res = await axios.get(process.env.REACT_APP_BASEURL + 'myorders/', {
          headers: { token: 'Bearer ' + JSON.parse(localStorage.getItem('bookUser')) }
        })
        setMyOrder(res.data)

      } catch (err) {
        console.log(err)
      }
    }
    getMyOrder();
  },[])
  return (
    <div className='cartPage'>
        <Navbar />
        <OrderList data={myOrder}/>
        <Footer className='footer'/>
    </div>
  )
}

export default OrderPage