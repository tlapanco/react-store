import { motion } from 'framer-motion'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import Reveal from './Reveal';



export const ProductCard = ({product, isProductInCart, removeFromCart, addToCart}) => {
    
    return (
        <Reveal>
        <motion.li             
            whileHover={{ translateY: -10 }} 
            className='select-none flex flex-col items-center justify-center p-4 border border-m-blue rounded-xl gap-4 hover:shadow-2xl hover:shadow-m-blue bg-white max-h-[500px] max-w-[400px]'
        >
            <img src={product.image} className='w-[200px] h-[200px] object-contain' alt={product.title} />
            <h3 className='text-xl font-bold border-b-2 border-b-t-purple line-clamp-1'>
                {product.title}
            </h3>
            <p>Precio: $ <span className='font-semibold'>{product.price} </span> </p>
            <Link to={'product/' + product.id} >
            <motion.button 
            whileHover={{ scale: 1.1 }} 
            className='p-3 border-2 text-m-purple font-bold border-m-purple hover:shadow-md hover:shadow-m-purple rounded-xl'
            > Ver detalle</motion.button>
            </Link>
            
            <motion.button 
            whileHover={{ scale: 1.1 }} 
            className='py-2 px-4 border-2 border-t-purple hover:shadow-md hover:shadow-t-purple rounded-xl font-semibold text-m-purple text-2xl'
            onClick={() => {isProductInCart ? removeFromCart(product) : addToCart(product)}}>
                {isProductInCart ? <MdOutlineRemoveShoppingCart /> : <MdOutlineAddShoppingCart />}
            </motion.button>

            
        </motion.li>
        </Reveal>
    )
}