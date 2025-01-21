import { Cart } from "./Cart";
import { Navbar } from "./Navbar";
import logo from '../assets/logo.webp'
import {motion} from 'framer-motion'

export const Header = () => {
    return (
        
        <motion.header
        initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: .25 }}
        className="select-none bg-white border-2 border-m-purple shadow-xl shadow-m-purple  h-20 flex justify-between px-4 items-center rounded-full mt-2 mx-1 md:mx-4">            
            
            <img src={logo} className="w-28 h-auto object-contain order-2 md:order-1" />
            
            <Navbar />
            <Cart />            
        </motion.header>
        
    );
}