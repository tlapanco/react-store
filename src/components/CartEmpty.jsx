import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {MdOutlineShoppingCart} from 'react-icons/md'
import { PiCatBold } from "react-icons/pi";

export const CartEmpty = () => {
	const navigate = useNavigate()
	return(
		<motion.main
			initial={{ opacity: 0, y: -50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 1 }}
			className="flex justify-center items-center flex-col gap-4 border-2 border-m-purple rounded-xl bg-white p-6  md:max-w-screen-md md:mx-auto mt-6 mx-6">		
			<div className="flex text-s-purple flex-col items-center relative pt-5"> <PiCatBold className="text-6xl font-extrabold absolute top-[-1rem]" /><MdOutlineShoppingCart className="text-9xl" /> </div>
			<h1 className="text-2xl font-bold" >Tu Meow Carrito está vacío</h1>
			<p className="text-center md:text-xl">Parece que no has agregado ningún artículo a tu carrito de compras</p>			
			<motion.button
					whileHover={{ scale: 1.1 }}
					className='p-3 border-2 border-m-purple hover:shadow-md hover:shadow-m-purple rounded-xl w-fit text-m-purple font-bold'
					onClick={() => navigate('/')}
			>
				Seguir comprando
			</motion.button>			
		</motion.main>
	)
}