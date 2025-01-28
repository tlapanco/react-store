import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import logo from '../assets/logo.webp'
export const Navbar = () => {

	const [nav, setNav] = useState(false)

	const toggleNav = () => {
		!nav ? document.body.classList.toggle('overflow-hidden') : document.body.classList.remove('overflow-hidden')
		setNav(!nav)
	}

	const closeNav = () => {
		document.body.classList.remove('overflow-hidden')
		setNav(false)
	}

	const menuVariants = {
		open: {
			x: 0,
			transition: {
				stiffness: 20,
				damping: 15
			}
		},
		closed: {
			x: '-100vw',
			transition: {
				stiffness: 20,
				damping: 15
			}
		}
	}

	return (
		<nav className='flex order-1 md:order-2'>			
			<ul className='hidden md:flex gap-12'>
				<NavLink className={({ isActive }) => isActive ? "border-b-2 border-b-m-purple" : ""} to="/" >Productos</NavLink>
				<NavLink className={({ isActive }) => isActive ? "border-b-2 border-b-m-purple" : ""} to="acerca-de" >Acerca de</NavLink>				
			</ul>

			<div onClick={toggleNav} className={`md:hidden z-20 p-3 text-xl text-m-purple rounded-full ${nav ? 'border border-m-purple shadow-md shadow-m-purple': ''}`}>
				{nav ? <MdOutlineClose /> : <RxHamburgerMenu />}
			</div>

			<motion.div
				initial={false}
				animate={nav ? 'open' : 'closed'}
				variants={menuVariants}
				
				className='fixed left-0 top-0 w-screen min-h-screen rounded-xl border-2 flex items-center justify-center z-10 backdrop-blur-md'
			>
				<ul className='font-semibold text-center grid grid-cols-1 gap-10 bg-white z-20 rounded-md border-2 shadow-xl shadow-s-blue border-s-blue p-10 w-[80%]'>
					<img src={logo} className='w-28 h-auto object-contain mx-auto drop-shadow-md' />
					<NavLink className='z-30 rounded-full border-2 border-m-purple shadow-xl shadow-m-purple py-2 px-5 text-sm bg-white' onClick={closeNav} to="/" >Productos</NavLink>
					<NavLink className='z-30 rounded-full border-2 border-m-purple shadow-xl shadow-m-purple py-2 px-5 text-sm bg-white' onClick={closeNav} to="acerca-de" >Acerca de</NavLink>
				</ul>
			</motion.div>

		</nav>
	)
}

export default Navbar