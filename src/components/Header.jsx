import { Cart } from "./Cart";
import { Navbar } from "./Navbar";
import logo from '../assets/logo.webp'
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <header className="w-full px-2 md:px-4 fixed top-2 z-10 flex justify-center">
        
        <motion.div
        initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: .25 }}
        className="w-full max-w-screen-xl select-none bg-white border-2 border-m-purple shadow-xl shadow-m-purple  h-20 flex justify-between px-4 items-center rounded-full top-2">            
            
            
            <NavLink className="order-2 md:order-1 w-28 h-auto" to="/">
                <img src={logo} className="object-contain " />
            </NavLink>
            
            <Navbar />
            <Cart />            
        </motion.div>
        </header>
        
    );
}