import './cartList.scss'
import CartItem from '../CartItem/cartItem'
import { useState } from 'react'

function CartList({values}) {
  const [anyDelete, setAnyDelete]= useState(null)
  return (
    <div className='cartList'>
      {values.filter((item)=>item._id !== anyDelete).map((item)=>{
        return(
          <CartItem className='myCartItem' key={item._id} data={item} setAnyDelete={setAnyDelete}/>
        )
      })}
    </div>
  )
}

export default CartList