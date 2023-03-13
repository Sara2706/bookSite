import './singleCartPage.scss'
import Navbar from '../../component/Navbar/navbar'
import CartSinglePreoduct from '../../component/CartSingleProduct/cartSinglePreoduct'
import Footer from '../../component/Footer/footer'
import BuyNowPopUp from '../../component/buyNowPopUp/buyNowPopUp'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

function SingleCartPage() {
  const location = useLocation();
  const [cartData,setCartData] = useState(location.state);
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <div className='products'>
        <Navbar />
        <CartSinglePreoduct cartData={cartData} setShowPopUp={setShowPopUp} showPopUp={showPopUp}/>
        <Footer className='footer'/>
        {showPopUp &&<BuyNowPopUp setOrderData={setCartData} orderData={cartData} setpop={setShowPopUp}/>}
    </div>
  )
}

export default SingleCartPage