import axios from 'axios';
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './buyNowPopUp.scss'

function BuyNowPopUp({setpop, orderData, setOrderData}) {
    const [err, setErr] = useState(false)
    const inputRef = useRef();
    const navigate = useNavigate();

    const addCusDetails = (e)=>{
        const value = e.target.value;
        if (value) {
            setOrderData({...orderData,[e.target.name]:value})
        }
    }

    const makeOrder = async (e)=>{
        e.preventDefault();
        if(!inputRef[0].value || !inputRef[1].value || !inputRef[2].value){
            setErr(true)
        }else{
            setOrderData({...orderData,"totAmt":orderData.price * orderData.qty})
            const res = await axios.post(process.env.REACT_APP_BASEURL + 'myorders/', orderData, { headers: { token: 'Bearer '+JSON.parse(localStorage.getItem('bookUser')) } })
            navigate('/order')
        }

    }
    return (
        <div className='buyNowPopUp'>
            <div className="back"></div>
            <div className="front">
                <h2>Conform Booking</h2>
                {err && <p style={{color:'red'}}>Don't leave any details empty</p>}
                <form className="form">
                    <div className="inputDetail">
                        <label>Customer Name:</label>
                        <input type="text" placeholder='Customer Name' name='costumerName' onChange={addCusDetails}  ref={(el) => (inputRef[0] = el)} required/>
                    </div>
                    <div className="inputDetail">
                        <label>Customer Mobile:</label>
                        <input type="text" placeholder='Customer Mobile' name='costumerPhoneNo' onChange={addCusDetails} ref={(el) => (inputRef[1] = el)} required/>
                    </div>
                    <div className="inputDetail">
                        <label>Customer Address:</label>
                        <input type="text" placeholder='Customer Address' name='costumerAddress' onChange={addCusDetails} ref={(el) => (inputRef[2] = el)} required/>
                    </div>
                    <div className="buttons">
                        <button className='book' onClick={makeOrder}>Conform Booking</button>
                        <button className='cancel' onClick={()=>setpop(false)}>cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BuyNowPopUp