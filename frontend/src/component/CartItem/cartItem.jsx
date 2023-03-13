import './cartItem.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';


function CartItem({ data,setAnyDelete }) {
    const [product, setProduct] = useState([]);

    const deleteCart = async (e) => {
        e.preventDefault();
        await axios.delete(process.env.REACT_APP_BASEURL + 'cart/' + data._id, {
            headers: { token: 'Bearer ' + JSON.parse(localStorage.getItem('bookUser')) }
        })
        setAnyDelete(data._id)
    }
    useEffect(() => {
        const getMyCart = async () => {

            try {
                const res = await axios.get(process.env.REACT_APP_BASEURL + 'product/' + data.productId, {
                    headers: { token: 'Bearer ' + JSON.parse(localStorage.getItem('bookUser')) }
                })
                setProduct(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getMyCart();
    }, [data.qty])
    return (
        <div className="cartItem">
            <Link to={'/cart/' + data._id} state={{ ...product, 'productId': data.productId, 'qty': data.qty, 'totAmt': product.price * data.qty, 'cartId': data._id }} className='link'>
                <div className="left">
                    <img src={product.img} alt="Banner img" />
                </div>
                <div className="right">
                    <h3>{product.productName}</h3>
                    <h4>Catogry: {product.catogry}</h4>
                    <h4>Qty: {data.qty}</h4>
                    <h6>Total Price: {product.price * data.qty}</h6>
                </div>
            </Link>
            <button onClick={deleteCart}>Delete from cart</button>
        </div>
    )
}

export default CartItem