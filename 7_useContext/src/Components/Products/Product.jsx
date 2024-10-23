import React, { useContext } from 'react'
import "./Product.css"
import CartContext from '../../Context/CartContext'

const Product = ({itemName, itemPrice}) => {
  const {items, setItems} = useContext(CartContext)
  
  return (
    <div className='card'>
        <p className='text-size'>Item : {itemName}</p>
        <p className='text-size'>Price : {itemPrice}</p>
        <button onClick={() => {
          setItems([
            ...items,
            {itemName, itemPrice}
          ])
        }}>Add to card</button>
    </div>
  )
}

export default Product