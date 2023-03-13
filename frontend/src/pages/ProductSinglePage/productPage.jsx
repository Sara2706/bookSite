import './productPage.scss'
import {useState} from 'react'
import Navbar from '../../component/Navbar/navbar'
import FullProduct from '../../component/FullProduct/fullProduct'
import Footer from '../../component/Footer/footer'
import BuyNowPopUp from '../../component/buyNowPopUp/buyNowPopUp'
import { useLocation } from 'react-router-dom'

function ProductPage() {
  const [showPopUp, setShowPopUp] = useState(false);
  const location = useLocation()
  const data = location.state;
  const [orderData, setOrderData] = useState({...data});
  return (
    <div className='products'>
        <Navbar />
        <FullProduct setpop={setShowPopUp} booKData={data} orderData={orderData} setOrderData={setOrderData}/>
        <Footer className='footer'/>
        {showPopUp && <BuyNowPopUp setpop={setShowPopUp} orderData={orderData} setOrderData={setOrderData}/>}
    </div>
  )
}

export default ProductPage