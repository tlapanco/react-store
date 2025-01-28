import { useCart } from "../hooks/useCart"
import { useNavigate, useParams } from "react-router-dom"
import { MdOutlineRemoveShoppingCart, MdOutlineAddShoppingCart } from "react-icons/md"
import { motion } from "framer-motion"
import Reveal from "./Reveal"
import { IMG_PREFIX } from '../constants.js'

export default function ProductDetail({ products }) {
    const navigate = useNavigate()
    const { addToCart, removeFromCart, cart } = useCart()

    const { id } = useParams()
    const [newProduct] = products.filter(p => p.id.toString() === id)

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }
    const isProductInCart = checkProductInCart(newProduct)


    return (
        <Reveal>
        <main className="p-6">
        <section className="max-w-full p-6 grid grid-cols-1 md:grid-cols-2 bg-white border-2 border-s-blue rounded-xl w-[800px] mx-auto gap-5 shadow-xl shadow-s-blue">
            <div className="flex items-center justify-center px-5">
                <img src={newProduct.images[0] ? IMG_PREFIX + newProduct.images[0].name : ''} alt={newProduct.title} className="w-full h-auto md:max-w-[350px] md:max-h-[200px] object-contain" />
            </div>
            <section className="grid grid-cols-1 gap-5">
                <h2 className="text-xl font-bold md:text-2xl"> {newProduct.name} </h2>
                <span className="md:text-xl font-bold text-m-blue"> ${newProduct.price} </span>
                <p className="text-md md:text-sm"> {newProduct.description} </p>
                <section className="w-full flex items-center gap-5">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className='p-3 border-2 border-m-purple hover:shadow-md hover:shadow-m-purple rounded-xl w-fit text-m-purple font-bold'
                    onClick={() => navigate(-1)}
                >
                    Regresar
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className='p-3 border-2 border-t-purple hover:shadow-md hover:shadow-t-purple rounded-xl font-semibold text-s-purple w-fit text-3xl'
                    onClick={() => { isProductInCart ? removeFromCart(newProduct) : addToCart(newProduct) }}>
                    {isProductInCart ? <MdOutlineRemoveShoppingCart /> : <MdOutlineAddShoppingCart />}
                </motion.button>
                </section>

            </section>



        </section>
        </main>
        </Reveal>
    );

}