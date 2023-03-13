import './cartSinglePreoduct.scss'
import { Add, Remove } from '@material-ui/icons'
import { useState } from 'react'
import axios from 'axios'


function CartSinglePreoduct({ cartData, showPopUp, setShowPopUp }) {
    const [quatity, setQuantity] = useState(cartData.qty)
    const handleQty = async (action) => {
        if (action === 'plus') {
            setQuantity(quatity + 1);
            cartData.qty = quatity;
            try {
                await axios.put(process.env.REACT_APP_BASEURL + 'cart/' + cartData.cartId, { 'qty': quatity + 1, 'totAmt': cartData.price * (quatity+1) }, { headers: { token: 'Bearer '+JSON.parse(localStorage.getItem('bookUser')) } })

            } catch (err) {
                console.log(err)
            }
        }

        if (action === 'minus') {
            if (quatity > 1) {
                setQuantity(quatity - 1)
                cartData.qty = quatity;
                try {
                    await axios.put(process.env.REACT_APP_BASEURL + 'cart/' + cartData.cartId, { 'qty': quatity - 1, 'totAmt': cartData.price * (quatity-1)}, { headers: { token: 'Bearer '+ JSON.parse(localStorage.getItem('bookUser')) } })
                    
                } catch (err) {
                    console.log(err)
                }

            }
        }
    }
    const setOrder = (e) => {
        e.preventDefault();
        setShowPopUp(true)
    }
    
    const deleteCart = async (e) => {
        e.preventDefault();
        await axios.delete(process.env.REACT_APP_BASEURL + 'cart/' + cartData.cartId, { headers: { token: 'Bearer '+ JSON.parse(localStorage.getItem('bookUser')) } })

    }

    return (
        <div className='CartSingleProduct'>
            <div className="left">
                <img src={cartData.img} alt="Banner img" />
            </div>
            <div className="right">
                <div className="top">
                    <h1>{cartData.productName}</h1>
                    <p>{cartData.description}</p>
                    <h4>Catogry: {cartData.catogry}</h4>
                    <h6>Price: {cartData.price}</h6>
                    <h5>Qty:<button onClick={() => handleQty('minus')}><Remove /></button><span> {quatity}</span><button onClick={() => handleQty('plus')}><Add /></button></h5>
                    <h6>Total Price: {cartData.price * quatity}</h6>
                </div>
                <div className="bottom bottons">
                    <button onClick={deleteCart}>Delete from cart</button>
                    <button onClick={setOrder}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default CartSinglePreoduct