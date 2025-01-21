import { useCart } from "../hooks/useCart"
import { motion } from "framer-motion"
import { MdOutlineRemoveShoppingCart } from "react-icons/md"
import Reveal from "./Reveal"


export default function CartDetail() {
    const { addToCart, removeOneFromCart,removeFromCart, cart } = useCart()
    let totalAmount = 0
    return (
        <motion.main 
        initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        className="flex justify-center p-5">
            <section className="border-2 border-m-purple rounded-xl bg-white shadow-2xl shadow-m-purple md:max-w-[70%] p-5">
                <h2>Meow carrito</h2>
                {cart.map(product => {
                    {totalAmount += product.quantity * product.price}
                    return (
                        <Reveal>
                        <article key={product.id} className="grid grid-cols-3 p-4 gap-2 border-2 border-m-purple rounded-md mb-3">
                            <img src={product.image} className="w-full h-auto mx-auto sm:max-w-[100px] md:max-h-[100px] object-contain" />
                            <div className="col-span-2">
                                <h3 className="line-clamp-1 md:min-w-[350px] max-w-[350px]"> {product.title} </h3>
                                <strong className="text-sm md:text-md xl:text-xl">Subtotal: ${product.quantity * product.price} </strong>
                                <footer className="flex items-center gap-5">
                                    <motion.button whileHover={{ scale: 1.2 }} className="w-5 h-5 rounded-full border-2 border-red-300 flex items-center justify-center text-red-300 font-bold" onClick={() => removeOneFromCart(product)}>-</motion.button>
                                    <small>Cantidad: {product.quantity}</small>
                                    <motion.button whileHover={{ scale: 1.2 }} className="w-5 h-5 rounded-full border-2 border-green-600 flex items-center justify-center text-green-600 font-bold" onClick={() => { addToCart(product) }}>+</motion.button>
                                </footer>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    className='mt-2 px-3 py-1 border-2 border-t-purple hover:shadow-md hover:shadow-t-purple rounded-xl font-semibold text-s-purple w-fit text-xl'
                                    onClick={() => { removeFromCart(product)} }>
                                    <MdOutlineRemoveShoppingCart />
                                </motion.button>
                            </div>


                        </article>
                        </Reveal>
                    )
                })}
                <h2 className="text-xl font-bold">Total: ${totalAmount} </h2>
            </section>
        </motion.main>
    )
}