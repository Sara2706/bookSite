import './cartPage.scss'
import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer'
import CartList from '../../component/CartList/cartList'
import { useEffect, useState } from 'react'
import axios from 'axios'


function CartPage() {
  const [myCart, setMyCart] = useState([]);
  useEffect(() => {
    const getMyCart = async () => {

      try {
        const res = await axios.get(process.env.REACT_APP_BASEURL + 'cart/', {
          headers: { token: 'Bearer ' + JSON.parse(localStorage.getItem('bookUser')) }
        })
        setMyCart(res.data)

      } catch (err) {
        console.log(err)
      }
    }
    getMyCart();
  },[])
  return (
    <div className='cartPage'>
      <Navbar />
      <CartList className='cartList' values={myCart}/>
      <Footer className='footer' />
    </div>
  )
}

export default CartPage