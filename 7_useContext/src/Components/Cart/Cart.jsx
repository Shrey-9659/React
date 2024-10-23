import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext'

const Cart = () => {
  const {items, setItems} = useContext(CartContext)
  let totalPrice = 0;
  totalPrice = items.reduce((acc, curr) => {
    return acc + curr.itemPrice
  }, 0)

  return (
    <div>
        <h1>Items Total : {totalPrice}</h1>
        {items.map((item) => <li>{item.itemName} - {item.itemPrice}</li> )}
    </div>
  )
}

export default Cart



