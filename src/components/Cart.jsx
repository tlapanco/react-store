import { useId } from 'react'
import { useCart } from '../hooks/useCart.js'

import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';

function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <NavLink to="carrito" className={({ isActive }) => isActive ? "flex px-2 relative order-3 py-1 w-12 overflow-visible rounded-full border-2 shadow-md shadow-m-purple border-m-purple" : "relative border-2 border-transparent order-3 pr-3"} >

      {/* <label className='flex relative px-3 hover:cursor-pointer' htmlFor={cartCheckboxId}> */}
        <MdOutlineShoppingCart className='text-m-purple text-3xl relative' />
        <span className='font-serif text-sm rounded-full bg-m-purple flex items-center w-5 h-5 absolute bottom-[-10px] right-[-5px] justify-center text-white'>{cart.length}</span>
      {/* </label> */}
      {/* <input id={cartCheckboxId} type='checkbox' hidden />       */}
    </NavLink>
  )
}
