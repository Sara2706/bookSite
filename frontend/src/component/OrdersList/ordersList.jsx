import './odersList.scss'
import { useState } from 'react';
import OrderItem from '../OrderItem/orderItem'

function OrdersList({data}) {
  const [anyDelete, setAnyDelete]= useState(null)
  return (
    <div className='ordersList'>
      {data.filter((item)=>item._id !== anyDelete).map((item)=>{
        return(
          <OrderItem key={item._id} value={item} setAnyDelete={setAnyDelete}/>
          )
      })}

    </div>
  )
}

export default OrdersList