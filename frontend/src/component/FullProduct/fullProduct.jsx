import './fullProduct.scss'
import { Add, Remove } from '@material-ui/icons'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FullProduct({ setpop, booKData, orderData, setOrderData }) {
    const [quantity, setQuantity] = useState(1)
    const navigate = useNavigate();

    const handleQty = (action) => {
        if (action === 'plus') {
            setQuantity(quantity + 1)
        }

        if (action === 'minus') {
            if (quantity > 1) {
                setQuantity(quantity - 1)
            }
        }
    }
    const setOrder = (e) => {
        e.preventDefault();
        setOrderData({ ...orderData,"productId": booKData._id, "qty": quantity })
        setpop(true)
    }

    const saveCart = async (e) => {
        e.preventDefault();
        const data = await { "productId": booKData._id, "qty": quantity }
        try {
            await axios.post(process.env.REACT_APP_BASEURL + 'cart/', data, 
            {
                headers:{token:'Bearer '+ JSON.parse(localStorage.getItem('bookUser'))}
            })

            navigate('/cart')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='fullProduct'>
            <div className="left">
                <img src={booKData.img} alt="Banner img" />
            </div>
            <div className="right">
                <div className="top">
                    <h1>{booKData.productName}</h1>
                    <p>{booKData.description}</p>
                    <h4>Catogry : {booKData.catogry}</h4>
                    <h6>Price : {booKData.price}</h6>
                    <h5>Qty : <button onClick={() => handleQty('minus')}><Remove /></button><span>{quantity}</span><button onClick={() => handleQty('plus')}><Add /></button></h5>
                    <h6>Total Price : {booKData.price * quantity}</h6>
                </div>
                <div className="bottom bottons">
                    <button onClick={saveCart}>Add To Cart</button>
                    <button onClick={setOrder}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default FullProduct