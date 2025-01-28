import { useCart } from "../hooks/useCart"
import { motion } from "framer-motion"
import { MdOutlineRemoveShoppingCart, MdWhatsapp } from "react-icons/md"
import { PiCat } from "react-icons/pi";
import Reveal from "./Reveal"
import { IMG_PREFIX } from '../constants.js'
import { CartEmpty } from './CartEmpty.jsx'
import { createWaMeLink } from '../utils/createWaMeLink.js'
import { MdOutlineShoppingCart } from 'react-icons/md'

export default function CartDetail() {
    const { addToCart, removeOneFromCart, removeFromCart, cart, clearCart } = useCart()

    if (cart.length === 0) {
        return <CartEmpty />
    } else{   

        let totalAmount = 0


    return (
        <motion.main
            // initial={{ opacity: 0, y: -50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            // transition={{ duration: 1 }}            
            className="flex justify-center p-5 flex-col justify-center items-center gap-4">
            <section className="border-2 border-m-purple rounded-xl bg-white shadow-2xl shadow-m-purple md:max-w-[70%] p-5">
                <h2 className="pb-4 font-semibold flex items-center gap-2 text-m-purple text-xl relative" > 
                    <PiCat className="text-2xl font-extrabold" /> 
                    Meow carrito 
                    <MdOutlineShoppingCart className="text-2xl" />
                    <button onClick={clearCart} className="text-sm py-1 md:text-md absolute right-0 border-2 border-m-purple px-2 rounded-full text-m-purple font-bold my-2 hover:shadow-md hover:shadow-m-purple">Vaciar carrito</button>
                </h2>                

                {cart.map(product => {
                    { totalAmount += product.quantity * product.price }
                    return (
                        <Reveal key={product.id} >
                            <article key={product.id} className="grid grid-cols-3 p-4 gap-2 border-2 border-m-purple rounded-md mb-3 justify-center items-center">
                                <img src={product.images[0] ? IMG_PREFIX + product.images[0].name : ''} className="w-full h-auto mx-auto sm:max-w-[100px] md:max-h-[100px] object-contain" />
                                <div className="col-span-2">
                                    <h3 className="line-clamp-1 md:min-w-[350px] max-w-[350px]"> {product.name} </h3>
                                    <strong className="text-sm md:text-md xl:text-xl">Subtotal: ${product.quantity * product.price} </strong>
                                    <footer className="flex items-center gap-5">
                                        <motion.button whileHover={{ scale: 1.2 }} className="w-5 h-5 rounded-full border-2 border-red-300 flex items-center justify-center text-red-300 font-bold" onClick={() => removeOneFromCart(product)}>-</motion.button>
                                        <small>Cantidad: {product.quantity}</small>
                                        <motion.button whileHover={{ scale: 1.2 }} className="w-5 h-5 rounded-full border-2 border-green-600 flex items-center justify-center text-green-600 font-bold" onClick={() => { addToCart(product) }}>+</motion.button>
                                    </footer>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        className='mt-2 px-3 py-1 border-2 border-t-purple hover:shadow-md hover:shadow-t-purple rounded-xl font-semibold text-s-purple w-fit text-xl'
                                        onClick={() => { removeFromCart(product) }}>
                                        <MdOutlineRemoveShoppingCart />
                                    </motion.button>
                                </div>


                            </article>
                        </Reveal>
                    )
                })}
            </section>

            <section className="flex gap-5 items-center">
                <h2 className="text-xl font-bold">Total: ${totalAmount} </h2>
                <button
                    onClick={() => { window.open(createWaMeLink(cart, totalAmount)) }}
                    className="fixed bottom-14 left-1/2 transform -translate-x-1/2 z-10 text-xl flex gap-2 items-center rounded-full bg-white border-2 border-m-blue px-3 py-1 text-m-blue shadow-md shadow-m-blue font-semibold">
                    <MdWhatsapp className="text-xl" />
                    Hacer pedido
                </button>
            </section>
        </motion.main>
    )
}
}