import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/LOGO.png'
import { CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci'
import { SlMenu } from 'react-icons/sl'
import { HiOutlineXMark } from 'react-icons/hi2'
const Navbar = () => {
	const [show, setShow] = useState(false)

	return (
		<div className='sticky top-0 z-20'>
			{/* =============================desktop version navbar ============================ */}
			<header className=" bg-gray-100 text-gray-700 opacity-90 lg:block hidden" >
				<div className="px-16 flex justify-between mx-auto items-center py-5">
					<ul className="flex justify-start items-center gap-5 overflow-auto w-[33%]">
						<NavLink to='/' className={({ isActive }) => isActive ? "border-b-2 hover:rounded border-orange-200 hover:border-b-2 hover:border-gray-200 " : ""}><li className='hover:bg-gradient-to-l hover:bg-orange-200 duration-300 hover:from-gray-200 py-1 px-3 rounded'>Home</li></NavLink>
						<NavLink to='/shop' className={({ isActive }) => isActive ? "border-b-2 hover:rounded border-orange-200 hover:border-b-2 hover:border-gray-200  " : ""}><li className='hover:bg-gradient-to-l hover:bg-orange-200 duration-300 hover:from-gray-200 py-1 px-3 rounded'>Shop</li></NavLink>
						<NavLink to='/about' className={({ isActive }) => isActive ? "border-b-2 hover:rounded border-orange-200 hover:border-b-2 hover:border-gray-200  " : ""}><li className='hover:bg-gradient-to-l hover:bg-orange-200 duration-300 hover:from-gray-200 py-1 px-3 rounded'>About Us</li></NavLink>
						<NavLink to='/contact' className={({ isActive }) => isActive ? "border-b-2 hover:rounded border-orange-200 hover:border-b-2 hover:border-gray-200  " : ""}><li className='hover:bg-gradient-to-l hover:bg-orange-200 duration-300 hover:from-gray-200 py-1 px-3 rounded'>Contact us</li></NavLink>
					</ul>

					<div className='w-[33%] flex justify-center'>
						<img src={logo} alt="logo" className='w-16 h-16' />
					</div>

					<div className="flex items-center gap-4 justify-end w-[33%] pr-8">
						<CiSearch className='w-6 h-6 text-gray-700'></CiSearch>
						<CiUser className='w-6 h-6 text-gray-700'></CiUser>
						<CiShoppingCart className='w-6 h-6 text-gray-700'></CiShoppingCart>
					</div>
				</div>
			</header>
			{/* =============================mobile and tablet version Navbar============================ */}
			<div className=" bg-gray-100 text-gray-700 lg:hidden block">
				<div className='py-2 px-4 flex justify-between items-center'>
					<div>
						<img src={logo} className="w-10 h-10 md:w-16 md:h-16" alt="" />
					</div>
					<div onClick={() => setShow(!show)}>
						{

							show ? <HiOutlineXMark className="w-7 h-7 md:w-9 md:h-9 text-gray-500"></HiOutlineXMark> :
								<SlMenu className="w-6 h-6 md:w-8 md:h-8 text-gray-500"></SlMenu>

						}
					</div>
				</div>
				<div >

					<ul className={`flex justify-center items-center md:gap-10 gap-2 absolute ${show ? 'md:translate-y-[-50px] translate-y-[-40px]' : 'translate-y-[-340px]'} duration-300 left-20 md:left-52`}>
						<NavLink to='/' className={({ isActive }) => isActive ? "border-b-2 hover:rounded border-orange-200 hover:border-b-2 hover:border-gray-200 " : ""}><li className='hover:bg-gradient-to-l hover:bg-orange-200 duration-300 hover:from-gray-200 py-1 md:px-3 px-1 rounded'>Home</li></NavLink>
						<NavLink to='/shop' className={({ isActive }) => isActive ? "border-b-2 hover:rounded border-orange-200 hover:border-b-2 hover:border-gray-200  " : ""}><li className='hover:bg-gradient-to-l hover:bg-orange-200 duration-300 hover:from-gray-200 py-1 md:px-3 px-1 rounded'>Shop</li></NavLink>
						<NavLink to='/about' className={({ isActive }) => isActive ? "border-b-2 hover:rounded border-orange-200 hover:border-b-2 hover:border-gray-200  " : ""}><li className='hover:bg-gradient-to-l hover:bg-orange-200 duration-300 hover:from-gray-200 py-1 md:px-3 px-1 rounded'>About Us</li></NavLink>
						<NavLink to='/contact' className={({ isActive }) => isActive ? "border-b-2 hover:rounded border-orange-200 hover:border-b-2 hover:border-gray-200  " : ""}><li className='hover:bg-gradient-to-l hover:bg-orange-200 duration-300 hover:from-gray-200 py-1 md:px-3 px-1 rounded'>Contact us</li></NavLink>
					</ul>


				</div>
			</div>

		</div>
	);
};

export default Navbar;